import React from "react";
import cn from "classnames";
import styles from "./icon.module.css";
import Button from "./button";


function IconButton({children, className, ...probs }) {
  return (
    <Button
      className={cn(styles.iconButton, className)}
      {...probs}
    >
      {children}
    </Button>
  );
}
export default IconButton;
