import Head from "next/head";
import { NavigationBar } from "../components/NavigationBar";
import layout from "./layout.module.scss";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={layout.wrapper}>
      <NavigationBar />
      <main>
        <section>
          <h2 id="about">BRSとは</h2>
          <p>
            　BRS(Bms event Rule Standard)は、BMSイベントにおける
            <b>最小限のルールを共通化した規格</b>
            です。BMSイベントのルールページでBRS規格を
            宣言することで、盗作の禁止や先行アーカイブ登録の禁止をはじめとした
            <b>ごく基本的なルール</b>を簡単に設定することが できます。
            <br />
            　主に、BMSイベントにおける基礎的ルール表記の
            <b>簡略化・明文化</b>を目的としています。
          </p>
          <a href="/brs/002" className={styles.dominant_button}>
            <img src="/badges/002.png" className="im" width="60" height="60" />
            <span>最新のBRSを表示</span>
          </a>
        </section>

        <section style={{ marginTop: 100 }}>
          <h2>使用例</h2>
          <p>
            　BMSイベントのルール欄でBRSを利用することで、下の例のように煩雑で書き漏らしがちなルールを短文かつ明確・正確に規定することができます。
          </p>
        </section>

        <dl className={styles.rules} style={{ marginTop: 48 }}>
          <dt>基本ルールが多すぎて煩雑になる例</dt>
          <dd>
            <ul className={styles.rule_example}>
              <li className={styles.section}>
                <p className={styles.h}>BMS投稿について</p>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    ジャンルを「JAZZ」としたBMSを投稿してください
                  </li>
                  <li className={styles.item}>
                    正常に再生可能なBMSであること（LR2で再生可能を推奨します）
                  </li>
                  <li className={styles.item}>
                    未完成品やダウンロードリンクの無い作品の投稿は失格となります
                  </li>
                  <li className={styles.item}>キー音無しBMSは禁止とします</li>
                  <li className={styles.item}>
                    BMSとしてすでに発表済みの作品は禁止とします
                  </li>
                </ul>
              </li>
              <li className={styles.section}>
                <p className={styles.h}>インプレッションについて</p>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    インプレッションは0 - 100ptsで評点をつけます
                  </li>
                  <li className={styles.item}>
                    作品に無関係な発言は禁止します
                  </li>
                  <li className={styles.item}>
                    自作自演による水増し行為は禁止します
                  </li>
                  <li className={styles.item}>
                    楽曲ではなく、個人の言動を評価の対象にする行為を禁止します
                  </li>
                </ul>
              </li>
            </ul>
          </dd>

          <dt>BRSを利用して基本ルールを省略した例</dt>
          <dd>
            <ul className={styles.rule_example}>
              <li className={styles.section}>
                <p className={styles.h}>BMS投稿について</p>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    ジャンルを「JAZZ」としたBMSを投稿してください
                  </li>
                  <li className={styles.item}>
                    BRS規格に準拠したBMSとします{" "}
                    <img src="/badges/002.png" width="24" height="24" />
                  </li>
                </ul>
              </li>
              <li className={styles.section}>
                <p className={styles.h}>インプレッションについて</p>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    インプレッションは0 - 100ptsで評点をつけます
                  </li>
                  <li className={styles.item}>
                    BRS規格に準拠したBMSとします{" "}
                    <img src="/badges/002.png" width="24" height="24" />
                  </li>
                </ul>
              </li>
            </ul>
          </dd>
        </dl>

        <section style={{ marginTop: 48 }}>
          <h2>利用方法</h2>
          <p>
            　USEページでHTMLコードを生成し、イベントのルールページに貼り付けてください。HTMLが使用できない場合は、使用するバージョンのBRSルールページのリンクを表記してください。
          </p>
          <a href="/use" className="intense-button">
            <span>HTMLコードを生成</span>
          </a>
        </section>
      </main>
    </div>
  );
}
