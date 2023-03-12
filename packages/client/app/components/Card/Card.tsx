import React, { Fragment, type ReactElement } from "react";
import { type StyleProp, type TextStyle, View, type ViewStyle } from "react-native";
import { spacing } from "@theme";
import { Text, type TextProps } from "../Text";
import { PressableOpacity, type PressableOpacityProps } from "../PressableOpacity";
import { useTheme } from "@hooks/useTheme";

interface CardProps extends Omit<PressableOpacityProps, "children"> {
  /**
   * How the content should be aligned vertically. This is especially (but not exclusively) useful
   * when the card is a fixed height but the content is dynamic.
   *
   * `top` (default) - aligns all content to the top.
   * `center` - aligns all content to the center.
   * `space-between` - spreads out the content evenly.
   * `force-footer-bottom` - aligns all content to the top, but forces the footer to the bottom.
   */
  verticalAlignment?: "top" | "center" | "space-between" | "force-footer-bottom";
  /**
   * Custom component added to the left of the card body.
   */
  LeftComponent?: ReactElement;
  /**
   * Custom component added to the right of the card body.
   */
  RightComponent?: ReactElement;
  /**
   * The heading text to display if not using `headingTx`.
   */
  heading?: TextProps["text"];
  /**
   * Heading text which is looked up via i18n.
   */
  headingTx?: TextProps["tx"];
  /**
   * Optional heading options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  headingTxOptions?: TextProps["txOptions"];
  /**
   * Style overrides for heading text.
   */
  headingStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the heading Text component.
   */
  HeadingTextProps?: TextProps;
  /**
   * Custom heading component.
   * Overrides all other `heading*` props.
   */
  HeadingComponent?: ReactElement;
  /**
   * The content text to display if not using `contentTx`.
   */
  content?: TextProps["text"];
  /**
   * Content text which is looked up via i18n.
   */
  contentTx?: TextProps["tx"];
  /**
   * Optional content options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  contentTxOptions?: TextProps["txOptions"];
  /**
   * Style overrides for content text.
   */
  contentStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the content Text component.
   */
  ContentTextProps?: TextProps;
  /**
   * Custom content component.
   * Overrides all other `content*` props.
   */
  ContentComponent?: ReactElement;
  /**
   * The footer text to display if not using `footerTx`.
   */
  footer?: TextProps["text"];
  /**
   * Footer text which is looked up via i18n.
   */
  footerTx?: TextProps["tx"];
  /**
   * Optional footer options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  footerTxOptions?: TextProps["txOptions"];
  /**
   * Style overrides for footer text.
   */
  footerStyle?: StyleProp<TextStyle>;
  /**
   * Pass any additional props directly to the footer Text component.
   */
  FooterTextProps?: TextProps;
  /**
   * Custom footer component.
   * Overrides all other `footer*` props.
   */
  FooterComponent?: ReactElement;
}

/**
 * Cards are useful for displaying related information in a contained way.
 * If a ListItem displays content horizontally, a Card can be used to display content vertically.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Card.md)
 */
export function Card(props: CardProps) {
  const {
    content,
    contentTx,
    contentTxOptions,
    footer,
    footerTx,
    footerTxOptions,
    heading,
    headingTx,
    headingTxOptions,
    ContentComponent,
    HeadingComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    verticalAlignment = "top",
    style: $containerStyleOverride,
    contentStyle: $contentStyleOverride,
    headingStyle: $headingStyleOverride,
    footerStyle: $footerStyleOverride,
    ContentTextProps,
    HeadingTextProps,
    FooterTextProps,
    ...WrapperProps
  } = props;

  const { theme } = useTheme();

  const isHeadingPresent = !!(HeadingComponent || heading || headingTx);
  const isContentPresent = !!(ContentComponent || content || contentTx);
  const isFooterPresent = !!(FooterComponent || footer || footerTx);

  const HeaderContentWrapper = verticalAlignment === "force-footer-bottom" ? View : Fragment;

  const $containerStyle = [
    $containerBase,
    {
      shadowColor: theme["shadow-basic-color-1"],
      backgroundColor: theme["background-basic-color-1"],
      borderColor: theme["border-basic-color-2"],
    },
    $containerStyleOverride as StyleProp<ViewStyle>,
  ];
  const $headingStyle = [
    (isFooterPresent || isContentPresent) && { marginBottom: spacing.micro },
    $headingStyleOverride,
    HeadingTextProps?.style,
  ];
  const $contentStyle = [
    isHeadingPresent && { marginTop: spacing.micro },
    isFooterPresent && { marginBottom: spacing.micro },
    $contentStyleOverride,
    ContentTextProps?.style,
  ];
  const $footerStyle = [
    (isHeadingPresent || isContentPresent) && { marginTop: spacing.micro },
    $footerStyleOverride,
    FooterTextProps?.style,
  ];
  const $alignmentWrapperStyle = [
    $alignmentWrapper,
    { justifyContent: $alignmentWrapperFlexOptions[verticalAlignment] },
    LeftComponent && { marginStart: spacing.small },
    RightComponent && { marginEnd: spacing.small },
  ];

  return (
    <PressableOpacity style={$containerStyle} activeOpacity={0.8} {...WrapperProps}>
      {LeftComponent}

      <View style={$alignmentWrapperStyle}>
        <HeaderContentWrapper>
          {HeadingComponent ||
            (isHeadingPresent && (
              <Text
                weight="bold"
                text={heading}
                tx={headingTx}
                txOptions={headingTxOptions}
                {...HeadingTextProps}
                style={$headingStyle}
              />
            ))}

          {ContentComponent ||
            (isContentPresent && (
              <Text
                weight="normal"
                text={content}
                tx={contentTx}
                txOptions={contentTxOptions}
                {...ContentTextProps}
                style={$contentStyle}
              />
            ))}
        </HeaderContentWrapper>

        {FooterComponent ||
          (isFooterPresent && (
            <Text
              weight="normal"
              size="xs"
              text={footer}
              tx={footerTx}
              txOptions={footerTxOptions}
              {...FooterTextProps}
              style={$footerStyle}
            />
          ))}
      </View>

      {RightComponent}
    </PressableOpacity>
  );
}

const $containerBase: ViewStyle = {
  borderRadius: spacing.medium,
  padding: spacing.medium,
  borderWidth: 1,
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 12.81,
  elevation: 16,
  minHeight: 96,
  flexDirection: "row",
};

const $alignmentWrapper: ViewStyle = {
  flex: 1,
  alignSelf: "stretch",
};

const $alignmentWrapperFlexOptions = {
  top: "flex-start",
  center: "center",
  "space-between": "space-between",
  "force-footer-bottom": "space-between",
} as const;
