import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import cn from "classnames";

import CONST from "../constants";
import styles from "./layout.module.css";

import Sidebar from "./col-sidebar";

import Main from "./col-main";
import Extra from "./col-extra";

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>siderbar</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  );
}

export default Layout;
