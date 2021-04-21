import {
  Lang,
  LangSwitch,
  LangSwitchContent,
} from "../../components/LangSwitch";
import React, { useState } from "react";

import BrsEn from "../../brs/002_en.mdx";
import BrsJp from "../../brs/002_jp.mdx";
import styles from "./common.module.scss";

const Page = () => {
  const [lang, setLang] = useState<Lang>("ja");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href="/" style={{ marginInlineEnd: 24 }}>
          BRSとは
        </a>
        <LangSwitch value={lang} options={["ja", "en"]} onChange={setLang} />
      </div>
      <img className={styles.badge} src="/badges/002.png" alt="BRS ver.002" />
      <h1>BRS ver.002</h1>

      <LangSwitchContent
        lang={lang}
        switch={{ ja: <BrsJp />, en: <BrsEn /> }}
      />
    </div>
  );
};

export default Page;
