import { StyleSheet } from "react-native";

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
  transparent: "rgba(0, 0, 0, 0)",
} as const;

export const colors = {
  /**
   * A helper for making something see-thru.
   */
  transparent: palette.transparent,
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Shadow color.
   */
  shadow: palette.neutral800,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error background.
   */
  errorBackground: palette.angry100,
  /**
   * Card background
   */
  cardBackground: palette.neutral100,

  defaultButtonBackground: palette.neutral100,
  defaultPressedButtonBackground: palette.neutral200,
  filledButtonBackground: palette.neutral300,
  filledPressedButtonBackground: palette.neutral400,
  reversedButtonBackground: palette.neutral800,
  reversedPressedButtonBackground: palette.neutral700,
  reversedbuttonText: palette.neutral100,

  toggleDisabled: palette.neutral400,
  toggleDisabledIcon: palette.neutral600,
  toggleOff: palette.neutral200,
  toggleOn: palette.neutral800,
  toggleDefaultColor: palette.secondary500,
  toggleIconTint: palette.neutral100,

  radioOnBackground: palette.neutral100,

  switchOffBackground: palette.neutral300,
  switchDisabledKnobBackground: palette.neutral600,
  switchKnobOn: palette.neutral100,
  switchKnobOff: palette.neutral200,
};

interface PlatformColors {
  primary: string;
  secondary: string;
  gray: string;
  searchBg: string;
  success: string;
  error: string;
  warning: string;
}

export interface Colors {
  readonly primary: string;
  readonly secondary: string;
  readonly background: string;
  readonly white: string;
  readonly black: string;
  readonly gray0: string;
  readonly gray1: string;
  readonly gray2: string;
  readonly gray3: string;
  readonly gray4: string;
  readonly gray5: string;
  readonly grayOutline: string;
  readonly searchBg: string;
  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly disabled: string;
  readonly divider: string;
  readonly platform: {
    ios: PlatformColors;
    android: PlatformColors;
    web: PlatformColors;
    default: PlatformColors;
  };
}

export const lightColors: Colors = {
  primary: "#2089dc",
  secondary: "#ad1457",
  background: "#ffffff",
  white: "#ffffff",
  black: "#242424",
  gray0: "#393e42",
  gray1: "#43484d",
  gray2: "#5e6977",
  gray3: "#86939e",
  gray4: "#bdc6cf",
  gray5: "#e1e8ee",
  grayOutline: "#bbb",
  searchBg: "#303337",
  success: "#52c41a",
  error: "#ff190c",
  warning: "#faad14",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#bcbbc1" : "rgba(0, 0, 0, 0.12)",
  platform: {
    ios: {
      primary: "#007aff",
      secondary: "#5856d6",
      gray: "#7d7d7d",
      searchBg: "#dcdce1",
      success: "#4cd964",
      error: "#ff3b30",
      warning: "#ffcc00",
    },
    android: {
      primary: "#2196f3",
      secondary: "#9C27B0",
      gray: "rgba(0, 0, 0, 0.54)",
      searchBg: "#dcdce1",
      success: "#4caf50",
      error: "#f44336",
      warning: "#ffeb3b",
    },
    web: {
      primary: "#2089dc",
      secondary: "#ca71eb",
      gray: "#393e42",
      searchBg: "#303337",
      success: "#52c41a",
      error: "#ff190c",
      warning: "#faad14",
    },
    default: {
      primary: "#007aff",
      secondary: "#5856d6",
      gray: "#7d7d7d",
      searchBg: "#dcdce1",
      success: "#4cd964",
      error: "#ff3b30",
      warning: "#ffcc00",
    },
  },
};

export const darkColors: Colors = {
  primary: "#439ce0",
  secondary: "#aa49eb",
  background: "#080808",
  white: "#080808",
  black: "#f2f2f2",
  gray5: "#393e42",
  gray4: "#43484d",
  gray3: "#5e6977",
  gray2: "#86939e",
  gray1: "#bdc6cf",
  gray0: "#e1e8ee",
  grayOutline: "#bbb",
  searchBg: "#303337",
  success: "#439946",
  error: "#bf2c24",
  warning: "#cfbe27",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#84838a" : "rgba(0, 0, 0, 0.12)",
  platform: {
    ios: {
      primary: "#1b262c",
      secondary: "#2089dc",
      gray: "#ffffff",
      searchBg: "#393e42",
      success: "#439946",
      error: "#bf2c24",
      warning: "#cfbe27",
    },
    android: {
      primary: "#1b262c",
      secondary: "#2089dc",
      gray: "#393e42",
      searchBg: "#393e42",
      success: "#439946",
      error: "#bf2c24",
      warning: "#cfbe27",
    },
    web: {
      primary: "#1b262c",
      secondary: "#2089dc",
      gray: "#ffffff",
      searchBg: "#393e42",
      success: "#439946",
      error: "#bf2c24",
      warning: "#cfbe27",
    },
    default: {
      primary: "#1b262c",
      secondary: "#2089dc",
      gray: "#ffffff",
      searchBg: "#393e42",
      success: "#439946",
      error: "#bf2c24",
      warning: "#cfbe27",
    },
  },
};
