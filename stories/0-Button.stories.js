import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import { Explore } from "../components/icons";
import TextTitle from "../components/text-title";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";

//storybook'daki ana kategori ismi

export default {
  title: "Buttons",
  decorators: [withKnobs],
};

export const Normal = () => <Button>Save</Button>;

export const Theme = () => (
  <Stack column gap={15}>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
);

export const NavButton = () => (
  <NavigationButton>
    <Explore />
    <TextTitle>Explore</TextTitle>
  </NavigationButton>
);
export const Nav = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};
