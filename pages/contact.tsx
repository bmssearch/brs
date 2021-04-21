import { NavigationBar } from "../components/NavigationBar";
import React from "react";
import layout from "./layout.module.scss";

export default function Abbr() {
  return (
    <div className={layout.wrapper}>
      <NavigationBar />
      <main>
        <section>
          <h1 id="about">CONTACT</h1>
          <p>
            当規格は、BMS SEARCHが作成しています。
            <br />
            ご不明な点や要望・議論などある場合は
            <a href="https://github.com/bmssearch/brs">BRSのGitHubリポジトリ</a>
            にIssueを作成してください。
          </p>
        </section>
      </main>
    </div>
  );
}
