import React from "react";
import { useRouter } from "next/router";

import { MENU } from "../constants";
import styles from "./navigation.module.css";
import cn from "classnames";

import TextTitle from "./text-title";
import NavigationButton from "./navigation-button";

function Navigation({ flat = false }) {
  const rooter = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = rooter.pathname === menu.path;
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        );
      })}
    </nav>
  );
}
export default Navigation;
