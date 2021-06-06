import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import { Explore } from "../components/icons";
import TitleBold from "../components/title-bold";

//storybook'daki ana kategori ismi

export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;
export const NavButton = () => (
  <NavigationButton>
    <Explore />
    <TitleBold>Explore</TitleBold>
  </NavigationButton>
);
export const Nav = () => <Navigation selectedKey="home" />;
