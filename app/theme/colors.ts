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
  transparent: "rgba(0, 0, 0, 0)",

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
  ...defaults,
  "color-basic-default-border": defaults["color-basic-default"],
  "color-basic-active-border": defaults["color-basic-active"],
  "color-basic-disabled-border": defaults["color-basic-disabled"],

  "color-basic-transparent-default-border": raw["color-basic-600"],
  "color-basic-transparent-active-border": raw["color-basic-600"],
  "color-basic-transparent-disabled-border": raw["color-basic-transparent-300"],

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
} as const;

export const lightColors = {
  ...palette,
  /**
   * Usually used for top sitting elements - cards, headers, etc.
   */
  "background-basic-color-1": raw["color-basic-100"],
  /**
   * For background of the layout and input controls (inputs, checkboxes, etc)
   */
  "background-basic-color-2": raw["color-basic-200"],
  "background-basic-color-3": raw["color-basic-300"],
  "background-basic-color-4": raw["color-basic-400"],

  "shadow-basic-color-1": raw["color-basic-900"],

  "border-basic-color-1": raw["color-basic-100"],
  "border-basic-color-2": raw["color-basic-200"],
  /**
   * Dividers
   */
  "border-basic-color-3": raw["color-basic-300"],

  "border-primary-color-1": raw["color-primary-500"],
  "border-primary-color-2": raw["color-primary-600"],

  "border-success-color-1": raw["color-success-500"],
  "border-success-color-2": raw["color-success-600"],

  "border-info-color-1": raw["color-info-500"],
  "border-info-color-2": raw["color-info-600"],

  "border-warning-color-1": raw["color-warning-500"],
  "border-warning-color-2": raw["color-warning-600"],

  "border-danger-color-1": raw["color-danger-500"],
  "border-danger-color-2": raw["color-danger-600"],

  /**
   * Main text color, used on top of basic backgrounds
   */
  "text-basic-color": raw["color-basic-800"],

  "text-alternate-color": raw["color-basic-100"],
  /**
   * Used on top of status colors (primary, success, etc)
   */
  "text-control-color": raw["color-basic-100"],
  /**
   * To indicate text/component disabled state
   */
  "text-disabled-color": raw["color-basic-transparent-600"],
  /**
   * For secondary texts (for example placeholders and captions)
   */
  "text-hint-color": raw["color-basic-600"],

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
  "text-success-disabled-color": raw["color-success-400"],

  /**
   * Used on top of info backgrounds
   */
  "text-info-color": palette["color-info-default"],
  "text-info-active-color": palette["color-info-active"],
  "text-info-disabled-color": raw["color-info-400"],

  /**
   * Used on top of warning backgrounds
   */
  "text-warning-color": palette["color-warning-default"],
  "text-warning-active-color": palette["color-warning-active"],
  "text-warning-disabled-color": raw["color-warning-400"],

  /**
   * Used on top of danger backgrounds
   */
  "text-danger-color": palette["color-danger-default"],
  "text-danger-active-color": palette["color-danger-active"],
  "text-danger-disabled-color": raw["color-danger-400"],
} as const;

export const darkColors = {
  ...palette,
  /**
   * Usually used for top sitting elements - cards, headers, etc.
   */
  "background-basic-color-1": raw["color-basic-800"],
  /**
   * For background of the layout and input controls (inputs, checkboxes, etc)
   */
  "background-basic-color-2": raw["color-basic-900"],
  "background-basic-color-3": raw["color-basic-1000"],
  "background-basic-color-4": raw["color-basic-1100"],

  "shadow-basic-color-1": raw["color-basic-100"],

  "border-basic-color-1": raw["color-basic-800"],
  "border-basic-color-2": raw["color-basic-900"],
  /**
   * Dividers
   */
  "border-basic-color-3": raw["color-basic-1000"],

  "border-primary-color-1": raw["color-primary-500"],
  "border-primary-color-2": raw["color-primary-600"],

  "border-success-color-1": raw["color-success-500"],
  "border-success-color-2": raw["color-success-600"],

  "border-info-color-1": raw["color-info-500"],
  "border-info-color-2": raw["color-info-600"],

  "border-warning-color-1": raw["color-warning-500"],
  "border-warning-color-2": raw["color-warning-600"],

  "border-danger-color-1": raw["color-danger-500"],
  "border-danger-color-2": raw["color-danger-600"],

  /**
   * Main text color, used on top of basic backgrounds
   */
  "text-basic-color": raw["color-basic-100"],

  "text-alternate-color": raw["color-basic-900"],
  /**
   * Used on top of status colors (primary, success, etc)
   */
  "text-control-color": raw["color-basic-100"],
  /**
   * To indicate text/component disabled state
   */
  "text-disabled-color": raw["color-basic-transparent-600"],
  /**
   * For secondary texts (for example placeholders and captions)
   */
  "text-hint-color": raw["color-basic-600"],

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
  "text-success-disabled-color": raw["color-success-400"],

  /**
   * Used on top of info backgrounds
   */
  "text-info-color": palette["color-info-default"],
  "text-info-active-color": palette["color-info-active"],
  "text-info-disabled-color": raw["color-info-400"],

  /**
   * Used on top of warning backgrounds
   */
  "text-warning-color": palette["color-warning-default"],
  "text-warning-active-color": palette["color-warning-active"],
  "text-warning-disabled-color": raw["color-warning-400"],

  /**
   * Used on top of danger backgrounds
   */
  "text-danger-color": palette["color-danger-default"],
  "text-danger-active-color": palette["color-danger-active"],
  "text-danger-disabled-color": raw["color-danger-400"],
};

export type ThemeMode = "light" | "dark";

export type Theme = typeof lightColors;
