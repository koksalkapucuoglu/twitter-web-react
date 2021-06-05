import React from "react";
import styles from "./button.module.css";

function Button({ children, ...probs }) {
  return (
    <button type="button" className={styles.button} {...probs}>
      {children}
    </button>
  );
}
export default Button;
