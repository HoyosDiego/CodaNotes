/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
/* eslint-disable no-restricted-syntax */
import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";

function percentageToHex(percentage: number): string {
  const validPercentage = Math.min(100, Math.max(0, percentage));

  const decimalValue = validPercentage / 100;

  let hexAlpha = Math.round(decimalValue * 255).toString(16);

  if (hexAlpha.length === 1) {
    hexAlpha = "0" + hexAlpha;
  }

  return hexAlpha.toUpperCase();
}

export const ColorOpacity = (color: string, opacity: number): string => {
  const hexAlpha = percentageToHex(opacity);

  const baseColor = color.startsWith("#") ? color : `#${color}`;

  return `${baseColor}${hexAlpha}`;
};

export const Colors = {
  background: "#fff",
  blackColor: "000000",
  blueColor: "#0a7ea4",
  grayColor: "#363535ff",
  greenColor: "#179206",
  icon: "#FF8E0C",
  lightBlueColor:'#19CBFD',
  lightGreenColor:'#E5F325',
  lightRedColor:'#D42211',
  mainColor: "#FF8E0C",
  pinkColor:'#F35FA6',
  purpleColor:'#200692',
  redColor:'#E80004',
  secondaryGreenColor:'#14A498',
  secondaryLightGreenColor:'#36F81B',
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  text: "#11181C",
  tint: tintColorLight,
  whiteColor: "#ffffff",
};

export const Fonts = Platform.select({
  ios: {
    mono: "ui-monospace",
    rounded: "ui-rounded",
    sans: "system-ui",
    serif: "ui-serif",
  },
  default: {
    mono: "monospace",
    rounded: "normal",
    sans: "normal",
    serif: "serif",
  },
  web: {
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
  },
});
