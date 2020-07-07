import React, { useState } from "react";
import classnames from "classnames";

import styles from "./index.module.less";
import "./index.css";

const Component = (props) => {
  const [count, setCount] = useState(0);
  const { color, children } = props;
  return (
    <button
      style={{ color }}
      className={classnames(styles.large, styles.bold, "backgroud")}
      onClick={() => setCount(count + 1)}
    >
      {children} click times:{count}
    </button>
  );
};

export default Component;
