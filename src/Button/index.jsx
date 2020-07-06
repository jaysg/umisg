import React from "react";
import classnames from "classnames";

import styles from "./index.module.less";
import "./index.css";

export default function(props) {
  const { color, children } = props;
  return (
    <button
      style={{ color }}
      className={classnames(styles.large, styles.bold, "backgroud")}
    >
      {children}
    </button>
  );
}
