import React, { ErrorInfo } from "react";
import { ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Button, Icon, Screen, Text } from "@components";
import { spacing } from "@theme";
import { useTheme } from "@hooks/useTheme";

export interface ErrorScreenProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorScreen(props: ErrorScreenProps) {
  const { theme } = useTheme();

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={$contentContainer}>
      <View style={$topSection}>
        <Icon icon="bug" size={64} />
        <Text appearance="danger" style={$heading} preset="subheading" tx="errorScreen.title" />
        <Text tx="errorScreen.friendlySubtitle" />
      </View>

      <ScrollView
        style={[$errorSection, { backgroundColor: theme["background-basic-color-1"] }]}
        contentContainerStyle={$errorSectionContentContainer}>
        <Text appearance="danger" weight="bold" text={`${props.error}`.trim()} />
        <Text
          selectable
          style={$errorBacktrace}
          text={`${props.errorInfo.componentStack}`.trim()}
        />
      </ScrollView>

      <Button
        appearance="primary"
        style={$resetButton}
        onPress={props.onReset}
        tx="errorScreen.reset"
      />
    </Screen>
  );
}

const $contentContainer: ViewStyle = {
  alignItems: "center",
  paddingHorizontal: spacing.large,
  paddingTop: spacing.extraLarge,
  flex: 1,
};

const $topSection: ViewStyle = {
  flex: 1,
  alignItems: "center",
};

const $heading: TextStyle = {
  marginBottom: spacing.medium,
};

const $errorSection: ViewStyle = {
  flex: 2,
  marginVertical: spacing.medium,
  borderRadius: 6,
};

const $errorSectionContentContainer: ViewStyle = {
  padding: spacing.medium,
};

const $errorBacktrace: TextStyle = {
  marginTop: spacing.medium,
};

const $resetButton: ViewStyle = {
  paddingHorizontal: spacing.huge,
};
