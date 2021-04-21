import { NavigationBar } from "../components/NavigationBar";
import React from "react";
import layout from "./layout.module.scss";

export default function Abbr() {
  return (
    <div className={layout.wrapper}>
      <NavigationBar />
      <main>
        <section>
          <h1 id="about">短縮アイコン</h1>
          <p>
            BRS ver.001 および ver.002
            で採用されていた追加ルールを示すアイコンです。
            <br />
            ※使用例が少なくルールの短文化にあまり寄与しないため、BRS自体をよりシンプルに保つために、ver.003で廃止されました。
          </p>
          <ul>
            <li>
              <img src="/badges/real.png" width="30" />
              <img src="/badges/real_jp.png" width="30" />
              <span>本名義による投稿に限る</span>
            </li>
            <li>
              <img src="/badges/fake.png" width="30" />
              <img src="/badges/fake_jp.png" width="30" />
              <span>偽名による投稿に限る</span>
            </li>
            <li>
              <img src="/badges/one.png" width="30" />
              <span>一人一曲に限る</span>
            </li>
            <li>
              <img src="/badges/original.png" width="30" />
              <span>オリジナル楽曲に限る</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
