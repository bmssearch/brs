import Brs from "../../brs/001_jp.mdx";
import React from "react";
import styles from "./common.module.scss";

const Page = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <a href="/" style={{ marginInlineEnd: 24 }}>
        BRSとは
      </a>
    </div>
    <img className={styles.badge} src="/badges/001.png" alt="BRS ver.001" />
    <h1>BRS ver.001</h1>
    <Brs />
  </div>
);

export default Page;
