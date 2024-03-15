import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  mode: "jit",
  content: {
    files: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },

  blocklist: [],
  theme: {
    screens: {
      sssm: "360px",
      ssm: "499px",
      sm: "576px",
      md: "800px",
      lg: "992px",
      xl: "1290px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.9375rem",
      },
    },
    colors: {
      "primary-color": "#6BC785",
      "banner-color": "#1A4845",
      "secondary-color": "#1A4845",
      "text-color": "#333",
      background: "#F3F3F3",
      "text-light-color": "#999",
      "border-color": "#e5e5e5",
      ...colors,
      lightBlue: colors.sky, // Fix: Rename 'lightBlue' to 'sky'
      warmGray: colors.stone, // Fix: Rename 'warmGray' to 'stone'
      trueGray: colors.neutral, // Fix: Rename 'trueGray' to 'neutral'
      coolGray: colors.gray, // Fix: Rename 'coolGray' to 'gray'
      blueGray: colors.slate, // Fix: Rename 'blueGray' to 'slate'
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      fontSize: {
        ssm: "0.75rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "product-detail": "url('/src/assests/1.jpg')",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
      },
      keyframes: {
        shine: {
          "100%": {
            left: "125%",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        shine: "shine 0.85s ease",
        appear: "appear 0.8s ease",
      },
      boxShadow: {
        sd: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        hd: "0 3px 10px 0 rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
