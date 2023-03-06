import React from "react";
import { PressableProps, View, ViewProps, ViewStyle } from "react-native";
import { ContentStyle, FlashList, FlashListProps } from "@shopify/flash-list";
import { spacing } from "@theme";
import { useTheme } from "@hooks/useTheme";
import { EmptyState } from "../EmptyState";
import { ListItem, ListItemProps } from "../ListItem";
import { LinearGradient, LinearGradientProps } from "../LinearGradient";
import { PressableScale } from "../PressableScale";

interface BaseListProps<TItem> extends Omit<FlashListProps<TItem>, "renderItem"> {
  getItemProps: (item: TItem, index: number) => ListItemProps<PressableProps, ViewProps>;
}

interface DefaultListProps<TItem> extends BaseListProps<TItem> {
  preset?: "default";
  separator?: boolean;
}

interface GradientListProps<TItem> extends BaseListProps<TItem> {
  preset?: "gradient";
  getGradientProps: (item: TItem, index: number) => LinearGradientProps;
}

export type ListProps<TItem> = GradientListProps<TItem> | DefaultListProps<TItem>;

const ItemSizes = {
  default: 56,
  gradient: 72,
} as const;

function EmptySeparator() {
  return <View style={$emptySeparator} />;
}

function LineSeparator() {
  const { theme } = useTheme();
  return <View style={[$lineSeparator, { backgroundColor: theme["border-basic-color-2"] }]} />;
}

function GradientList<TItem>({
  data,
  getGradientProps,
  getItemProps,
  ...ListProps
}: GradientListProps<TItem>) {
  const $listContainerStyle = $listContainerPresets.gradient;
  const itemSize = ItemSizes.gradient;

  return (
    <FlashList<TItem>
      contentContainerStyle={$listContainerStyle}
      data={data}
      ItemSeparatorComponent={EmptySeparator}
      estimatedItemSize={itemSize}
      ListEmptyComponent={EmptyState}
      renderItem={({ item, index }) => {
        return (
          <ListItem
            height={itemSize}
            round
            PressableComponent={PressableScale}
            BackgroundComponent={LinearGradient}
            backgroundProps={getGradientProps(item, index)}
            {...getItemProps(item, index)}
          />
        );
      }}
      {...ListProps}
    />
  );
}

function DefaultList<TItem>({
  data,
  getItemProps,
  separator,
  ...ListProps
}: DefaultListProps<TItem>) {
  const $listContainerStyle = $listContainerPresets.default;
  const itemSize = ItemSizes.default;
  const Separator = separator && LineSeparator;

  return (
    <FlashList<TItem>
      contentContainerStyle={$listContainerStyle}
      data={data}
      ItemSeparatorComponent={Separator}
      estimatedItemSize={itemSize}
      ListEmptyComponent={EmptyState}
      renderItem={({ item, index }) => {
        return <ListItem height={itemSize} {...getItemProps(item, index)} />;
      }}
      {...ListProps}
    />
  );
}

export function List<TItem>(props: ListProps<TItem>) {
  return props.preset === "gradient" ? <GradientList {...props} /> : <DefaultList {...props} />;
}

const $emptySeparator: ViewStyle = {
  height: spacing.medium,
};

const $lineSeparator: ViewStyle = {
  height: spacing.nano,
};

const $listContainerPresets = {
  default: {} as ContentStyle,

  gradient: {
    paddingVertical: spacing.medium,
  } as ContentStyle,
};
