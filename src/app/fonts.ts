import { Jost } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
  adjustFontFallback: false,
});
