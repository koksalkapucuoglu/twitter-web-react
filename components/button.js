import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./button.module.css";

function LinkButton({ href, children, ...probs }) {
  return (
    <Link href={href}>
      <a {...probs}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...probs }) {
  return (
    <button type="button" {...probs}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...probs }) {
  const Comp = probs.href ? LinkButton : BaseButton;
  return (
    <Comp
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...probs}
    >
      {children}
    </Comp>
  );
}
export default Button;
