import React from "react";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="./">
          <img src="/images/logo.svg" className={styles.logo} />
        </a>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="./archives">ARCHIVES</a>
          </li>
          <li>
            <a href="./use">USE</a>
          </li>
          <li>
            <a href="./contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
