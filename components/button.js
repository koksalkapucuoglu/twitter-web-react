import React from "react";
import cn from "classnames";
import styles from "./button.module.css";

function Button({ full = false, children, className, ...probs }) {
  return (
    <button
      type="button"
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...probs}
    >
      {children}
    </button>
  );
}
export default Button;
