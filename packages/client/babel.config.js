const plugins = [
  [
    "module-resolver",
    {
      root: ["./app"],
      alias: {
        "@app": "./app",
        "@assets": "./assets",
        "@components": "./app/components",
        "@config": "./app/config",
        "@contexts": "./app/contexts",
        "@hooks": "./app/hooks",
        "@lib": "./app/lib",
        "@navigators": "./app/navigators",
        "@screens": "./app/screens",
        "@services": "./app/services",
        "@theme": "./app/theme",
        "@utils": "./app/utils",
      },
    },
  ],
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
  ["@babel/plugin-proposal-optional-catch-binding"],
  "@babel/plugin-proposal-export-namespace-from",
  "react-native-reanimated/plugin", // NOTE: this must be last in the plugins
];

const vanillaConfig = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins,
};

const expoConfig = {
  presets: ["babel-preset-expo"],
  plugins,
};

let isExpo = false;
try {
  const Constants = require("expo-constants");
  // True if the app is running in an `expo build` app or if it's running in Expo Go.
  isExpo =
    Constants.executionEnvironment === "standalone" ||
    Constants.executionEnvironment === "storeClient";
} catch {}

const babelConfig = isExpo ? expoConfig : vanillaConfig;

module.exports = babelConfig;
