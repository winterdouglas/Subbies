import React from "react";
import { Button, Card, Icon, List, Screen, Text, TextField, Toggle } from "@components";
import { type AppStackScreenProps } from "@navigators";
import { useHeader } from "@hooks/useHeader";
import { useTheme } from "@hooks/useTheme";
import { hexToHSL, toHSLString } from "@utils/colorUtils";

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

const items = [
  { title: "Whatever", color: "#FF9800" },
  { title: "Another cool item", color: "#F44336" },
];

export const WelcomeScreen = function WelcomeScreen(_props: WelcomeScreenProps) {
  useHeader({
    title: "Subbies",
    rightIcon: "add",
  });

  const { toggleMode, mode } = useTheme();

  return (
    <Screen preset="fixed">
      <Text preset="bold" tx="welcomeScreen.exciting" size="xxl" />
      <Card
        LeftComponent={<Icon icon="add-circle" size={32} />}
        HeadingComponent={
          <Toggle
            variant="checkbox"
            label="Dark Mode"
            onPress={toggleMode}
            value={mode === "dark"}
          />
        }
        content="This is some nice card text"
        footer="This is the footer"
        FooterComponent={
          <>
            <TextField placeholder="This is a placeholder" helper="This is the input info" />
            <Toggle variant="radio" />
            <Toggle variant="radio" value={true} />
            <Toggle variant="switch" switchAccessibilityMode="text" />
            <Toggle
              variant="switch"
              value={true}
              label="A cool option"
              switchAccessibilityMode="text"
            />
            <Button text="Test" appearance="primary" />
          </>
        }
      />

      <List
        // preset="gradient"
        data={items}
        keyExtractor={(item) => item.title}
        getGradientProps={(item) => {
          const color = hexToHSL(item.color);
          const gradientStart = toHSLString(color);
          const gradientEnd = toHSLString({ ...color, l: Math.min(color.l + color.l * 0.2, 100) });

          return {
            colors: [gradientStart, gradientEnd],
          };
        }}
        getItemProps={(item) => {
          return {
            text: item.title,
            leftIcon: "add",
            rightIcon: "chevron-forward",
          };
        }}
      />
    </Screen>
  );
};
