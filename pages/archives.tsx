import { NavigationBar } from "../components/NavigationBar";
import React from "react";
import layout from "./layout.module.scss";
import styles from "./archives.module.scss";

export default function Archives() {
  return (
    <div className={layout.wrapper}>
      <NavigationBar />
      <main>
        <section>
          <h1 id="about">ARCHIVES</h1>

          <dl className={styles.archives}>
            <dt>
              <a href="/brs/003">
                <img
                  className={styles.badge}
                  src="/badges/003.png"
                  alt="BRS ver.003"
                />
                <span>BRS Ver.003 (最新 2021/04/21)</span>
              </a>
            </dt>
            <dd>
              <ul>
                <li>短縮アイコンを廃止しました。</li>
                <li>
                  必須再生環境をLunatic Rave 2 と beatoraja
                  のいずれかとしました。
                </li>
                <li>
                  BMSA, Musicbox,
                  生MIDIデータの禁止を、近年では明示的に取り上げる必要のないものとして削除しました。
                </li>
                <li>主催者の裁量で不適切なBMSを判断できるようにしました。</li>
                <li>BMS未プレイでのインプレッションを禁止しました。</li>
              </ul>
            </dd>

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
