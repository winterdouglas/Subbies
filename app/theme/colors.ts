const raw = {
  // Backgrounds and borders
  "color-basic-100": "#FFFFFF",
  "color-basic-200": "#F5F5F5",
  "color-basic-300": "#F5F5F5",
  "color-basic-400": "#D4D4D4",
  "color-basic-500": "#B3B3B3",
  "color-basic-600": "#808080",
  "color-basic-700": "#4A4A4A",
  "color-basic-800": "#383838",
  "color-basic-900": "#292929",
  "color-basic-1000": "#1F1F1F",
  "color-basic-1100": "#141414",

  "color-basic-transparent-100": "rgba(128, 128, 128, 0.08)",
  "color-basic-transparent-200": "rgba(128, 128, 128, 0.16)",
  "color-basic-transparent-300": "rgba(128, 128, 128, 0.24)",
  "color-basic-transparent-400": "rgba(128, 128, 128, 0.32)",
  "color-basic-transparent-500": "rgba(128, 128, 128, 0.4)",
  "color-basic-transparent-600": "rgba(128, 128, 128, 0.48)",

  // Branding color
  "color-primary-100": "#E1EFFB",
  "color-primary-200": "#C5DEF8",
  "color-primary-300": "#A2C3EA",
  "color-primary-400": "#84A6D6",
  "color-primary-500": "#5C80BC",
  "color-primary-600": "#4363A1",
  "color-primary-700": "#2E4887",
  "color-primary-800": "#1D326D",
  "color-primary-900": "#11215A",

  // Status colors
  "color-success-100": "#EDFCD5",
  "color-success-200": "#D6F9AD",
  "color-success-300": "#B5ED81",
  "color-success-400": "#93DB5E",
  "color-success-500": "#65C42F",
  "color-success-600": "#4AA822",
  "color-success-700": "#338D17",
  "color-success-800": "#20710E",
  "color-success-900": "#125E09",

  "color-info-100": "#D7FDFA",
  "color-info-200": "#B0FBFB",
  "color-info-300": "#86EDF4",
  "color-info-400": "#66D7EA",
  "color-info-500": "#37B9DD",
  "color-info-600": "#2892BE",
  "color-info-700": "#1B6F9F",
  "color-info-800": "#114F80",
  "color-info-900": "#0A396A",

  "color-warning-100": "#FEF6D9",
  "color-warning-200": "#FEEBB3",
  "color-warning-300": "#FCDC8D",
  "color-warning-400": "#FACD70",
  "color-warning-500": "#F7B542",
  "color-warning-600": "#D49230",
  "color-warning-700": "#B17221",
  "color-warning-800": "#8F5515",
  "color-warning-900": "#76400C",

  "color-danger-100": "#FFE9DB",
  "color-danger-200": "#FFCDB8",
  "color-danger-300": "#FFAB95",
  "color-danger-400": "#FF8C7A",
  "color-danger-500": "#FF574F",
  "color-danger-600": "#DB393F",
  "color-danger-700": "#B72739",
  "color-danger-800": "#931932",
  "color-danger-900": "#7A0F2E",
} as const;

const defaults = {
  "color-basic-default": raw["color-basic-300"],
  "color-basic-active": raw["color-basic-400"],
  "color-basic-disabled": raw["color-basic-transparent-300"],

  "color-primary-default": raw["color-primary-500"],
  "color-primary-active": raw["color-primary-600"],
  "color-primary-disabled": raw["color-basic-transparent-300"],

  "color-basic-transparent-default": raw["color-basic-transparent-100"],
  "color-basic-transparent-active": raw["color-basic-transparent-300"],
  "color-basic-transparent-disabled": raw["color-basic-transparent-200"],

  "color-success-default": raw["color-success-500"],
  "color-success-active": raw["color-success-600"],
  "color-success-disabled": raw["color-basic-transparent-300"],

  "color-info-default": raw["color-info-500"],
  "color-info-active": raw["color-info-600"],
  "color-info-disabled": raw["color-basic-transparent-300"],

  "color-warning-default": raw["color-warning-500"],
  "color-warning-active": raw["color-warning-600"],
  "color-warning-disabled": raw["color-basic-transparent-300"],

  "color-danger-default": raw["color-danger-500"],
  "color-danger-active": raw["color-danger-600"],
  "color-danger-disabled": raw["color-basic-transparent-300"],

  "color-control-default": raw["color-basic-100"],
  "color-control-active": raw["color-basic-300"],
  "color-control-disabled": raw["color-basic-transparent-300"],
} as const;

const palette = {
  ...raw,
  ...defaults,
  "color-basic-default-border": defaults["color-basic-default"],
  "color-basic-active-border": defaults["color-basic-active"],
  "color-basic-disabled-border": defaults["color-basic-disabled"],

  "color-primary-default-border": defaults["color-primary-default"],
  "color-primary-active-border": defaults["color-primary-active"],
  "color-primary-disabled-border": defaults["color-primary-disabled"],

  "color-success-default-border": defaults["color-success-default"],
  "color-success-active-border": defaults["color-success-active"],
  "color-success-disabled-border": defaults["color-success-disabled"],

  "color-info-default-border": defaults["color-info-default"],
  "color-info-active-border": defaults["color-info-active"],
  "color-info-disabled-border": defaults["color-info-disabled"],

  "color-warning-default-border": defaults["color-warning-default"],
  "color-warning-active-border": defaults["color-warning-active"],
  "color-warning-disabled-border": defaults["color-warning-disabled"],

  "color-danger-default-border": defaults["color-danger-default"],
  "color-danger-active-border": defaults["color-danger-active"],
  "color-danger-disabled-border": defaults["color-danger-disabled"],

  "color-control-default-border": defaults["color-control-default"],
  "color-control-active-border": defaults["color-control-active"],
  "color-control-disabled-border": defaults["color-control-disabled"],

  // Ignite
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
   * Usually used for top sitting elements - cards, headers, etc.
   */
  "background-basic-color-1": palette["color-basic-100"],
  /**
   * For background of the layout and input controls (inputs, checkboxes, etc)
   */
  "background-basic-color-2": palette["color-basic-200"],
  // "background-basic-color-3": palette["color-basic-300"],
  // "background-basic-color-4": palette["color-basic-400"],

  "border-basic-color-1": palette["color-basic-100"],
  "border-basic-color-2": palette["color-basic-200"],
  // "border-basic-color-3": palette["color-basic-300"],
  // "border-basic-color-4": palette["color-basic-400"],

  "border-primary-color-1": palette["color-primary-500"],
  "border-primary-color-2": palette["color-primary-600"],
  // "border-primary-color-3": palette["color-primary-700"],
  // "border-primary-color-4": palette["color-primary-800"],

  "border-success-color-1": palette["color-success-500"],
  "border-success-color-2": palette["color-success-600"],
  // "border-success-color-3": palette["color-success-700"],
  // "border-success-color-4": palette["color-success-800"],

  "border-info-color-1": palette["color-info-500"],
  "border-info-color-2": palette["color-info-600"],
  // "border-info-color-3": palette["color-info-700"],
  // "border-info-color-4": palette["color-info-800"],

  "border-warning-color-1": palette["color-warning-500"],
  "border-warning-color-2": palette["color-warning-600"],
  // "border-warning-color-3": palette["color-warning-700"],
  // "border-warning-color-4": palette["color-warning-800"],

  "border-danger-color-1": palette["color-danger-500"],
  "border-danger-color-2": palette["color-danger-600"],
  // "border-danger-color-3": palette["color-danger-700"],
  // "border-danger-color-4": palette["color-danger-800"],

  /**
   * Main text color, used on top of basic backgrounds
   */
  "text-basic-color": palette["color-basic-800"],
  /**
   * Used on top of status colors (primary, success, etc)
   */
  "text-control-color": palette["color-basic-100"],
  /**
   * To indicate text/component disabled state
   */
  "text-disabled-color": palette["color-basic-transparent-600"],
  /**
   * For secondary texts (for example placeholders and captions)
   */
  "text-hint-color": palette["color-basic-600"],

  /**
   * Used on top of primary backgrounds
   */
  "text-primary-color": palette["color-primary-default"],
  "text-primary-active-color": palette["color-primary-active"],
  "text-primary-disabled-color": palette["color-primary-disabled"],

  /**
   * Used on top of success backgrounds
   */
  "text-success-color": palette["color-success-default"],
  "text-success-active-color": palette["color-success-active"],
  "text-success-disabled-color": palette["color-success-400"],

  /**
   * Used on top of info backgrounds
   */
  "text-info-color": palette["color-info-default"],
  "text-info-active-color": palette["color-info-active"],
  "text-info-disabled-color": palette["color-info-400"],

  /**
   * Used on top of warning backgrounds
   */
  "text-warning-color": palette["color-warning-default"],
  "text-warning-active-color": palette["color-warning-active"],
  "text-warning-disabled-color": palette["color-warning-400"],

  /**
   * Used on top of danger backgrounds
   */
  "text-danger-color": palette["color-danger-default"],
  "text-danger-active-color": palette["color-danger-active"],
  "text-danger-disabled-color": palette["color-danger-400"],

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
} as const;

export type Theme = "light" | "dark";

export type ThemeData = typeof colors;
