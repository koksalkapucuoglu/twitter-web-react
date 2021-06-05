import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";

//storybook'daki ana kategori ismi

export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;
export const NavButton = () => <NavigationButton>Save</NavigationButton>;
export const Nav = () => <Navigation>Save</Navigation>;
