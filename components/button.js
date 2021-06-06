import React from "react";
import cn from "classnames";
import styles from "./button.module.css";

function Button({ children, className, ...probs }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...probs}>
      {children}
    </button>
  );
}
export default Button;
