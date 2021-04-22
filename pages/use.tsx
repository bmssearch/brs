import React, { useCallback, useRef, useState } from "react";

import { NavigationBar } from "../components/NavigationBar";
import layout from "./layout.module.scss";
import styles from "./use.module.scss";

type Version = "001" | "002" | "003";

const html = (version: Version, size: number) => {
  return `<a href="https://brs.bmssearch.net/brs/${version}" target="_blank" rel="noopener noreferrer"><img src="https://brs.bmssearch.net/badges/${version}.png" width="${size}" height="${size}" alt="BRS ver.${version}"></a>`;
};

export default function Use() {
  const [version, setVersion] = useState<Version>("003");
  const [size, setSize] = useState(40);

  const codeRef = useRef<HTMLTextAreaElement>(null);
  const onClickCode = useCallback(() => {
    codeRef.current?.select();
  }, []);

  return (
    <div className={layout.wrapper}>
      <NavigationBar />
      <main>
        <section>
          <h1>USE</h1>
          <form action="#" method="post">
            <dl className={styles.form}>
              <dt>BRSバージョン</dt>
              <dd>
                <select
                  value={version}
                  onChange={(e) => {
                    setVersion(e.target.value as Version);
                  }}
                  className={styles.version}
                >
                  <option value="003">Version.003 (最新)</option>
                  <option value="002">Version.002</option>
                  <option value="001">Version.001</option>
                </select>
              </dd>
              <dt>アイコンサイズ</dt>
              <dd>
                <input
                  type="number"
                  min={16}
                  max={120}
                  className={styles.size}
                  value={size}
                  onChange={(e) => {
                    setSize(Number(e.target.value));
                  }}
                />
                px
              </dd>
            </dl>
          </form>
          <div className={styles.result}>
            <a
              href={`https://brs.bmssearch.net/brs/${version}`}
              target="_blank"
              className={styles.icon}
              rel="noopener noreferrer"
            >
              <img
                src={`https://brs.bmssearch.net/badges/${version}.png`}
                alt={`BRS ver.${version}`}
                width={size}
                height={size}
              />
            </a>
            <textarea
              ref={codeRef}
              className={styles.code}
              value={html(version, size)}
              readOnly={true}
              style={{ marginTop: 8 }}
              onClick={onClickCode}
            ></textarea>
          </div>
        </section>
      </main>
    </div>
  );
}
