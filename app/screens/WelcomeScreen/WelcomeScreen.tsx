import React from "react";
import { Button, Card, Icon, Screen, Text, Toggle } from "@components";
import { AppStackScreenProps } from "@navigators";
import { useHeader } from "@hooks";
import { colors } from "@theme";
// import { hexToHSL, toHSLString } from "@utils/colorUtils";

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

// const items = [
//   { title: "Whatever", color: "#FF9800" },
//   { title: "Another cool item", color: "#F44336" },
// ];

export const WelcomeScreen = function WelcomeScreen(_props: WelcomeScreenProps) {
  useHeader({
    title: "Subbies",
  });

  return (
    <Screen preset="fixed">
      <Toggle value={true} variant="checkbox" />
      <Text preset="bold" tx="common.back" size="xxl" style={{ color: colors.tint }} />
      {/* <List
        preset="gradient"
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
      /> */}
      <Card
        LeftComponent={<Icon icon="add-circle" size={32} />}
        content="This is some nice card text"
        heading="This is the title"
        footer="This is the footer"
      />
      <Button text="Test" preset="reversed" />
    </Screen>
  );
};
