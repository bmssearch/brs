import React from "react";
import clsx from "clsx";
import styles from "./LangSwitch.module.scss";

export type Lang = "ja" | "en";

interface Props {
  value: Lang;
  options: Lang[];
  onChange: (value: Lang) => void;
}

const label: { [key in Lang]: string } = {
  ja: "JP",
  en: "EN",
};

export const LangSwitch: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <div>
      {options
        .map((option) => (
          <a
            key={option}
            className={clsx(
              value === option ? styles.active : styles.selectable
            )}
            onClick={() => {
              onChange(option);
            }}
          >
            {label[option]}
          </a>
        ))
        .reduce((prev, curr) => (
          <>
            {prev}
            <span className={styles.separator}>/</span>
            {curr}
          </>
        ))}
    </div>
  );
};

interface LangSwitchContentProps {
  lang: Lang;
  switch: { [key in Lang]?: React.ReactElement };
}

export const LangSwitchContent: React.FC<LangSwitchContentProps> = (props) => {
  return <>{props.switch[props.lang] || null}</>;
};
