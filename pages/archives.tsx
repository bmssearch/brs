import { useCallback, useRef, useState } from "react";

import { NavigationBar } from "../components/NavigationBar";
import layout from "./layout.module.scss";
import styles from "./archives.module.scss";

export default function Archives() {
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
          <h1 id="about">ARCHIVES</h1>

          <dl className={styles.archives}>
            <dt>
              <a href="/brs/002">
                <img
                  className={styles.badge}
                  src="/badges/002.png"
                  alt="BRS ver.002"
                />
                <span>BRS Ver.002 (2017/02/20)</span>
              </a>
            </dt>
            <dd>
              <ul>
                <li>
                  登録期間以前に譜面の全容を明らかにする行為を禁止しました。
                </li>
                <li>英語表記を追加しました。</li>
              </ul>
            </dd>

            <dt>
              <a href="/brs/001">
                <img
                  className={styles.badge}
                  src="/badges/001.png"
                  alt="BRS ver.001"
                />
                <span>BRS Ver.001(2016/04/02)</span>
              </a>
            </dt>
            <dd></dd>

            <dt>
              <a href="/abbr">短縮アイコン</a>
            </dt>
            <dd>Ver.003で廃止されました</dd>
          </dl>
        </section>
      </main>
    </div>
  );
}
