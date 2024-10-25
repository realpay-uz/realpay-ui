import twTypographyPlugin from "@tailwindcss/typography";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import { config } from "@realpay-ui/tailwind-config";

const twConfig = {
  presets: [config, createPreset({ addGlobalColors: true })],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/react/*/src/*.tsx",
    "./content/**/*.{md,mdx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  plugins: [twTypographyPlugin],
  extends: {
    keyframes: {
      shine: {
        from: { backgroundPosition: "200% 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
    animation: {
      shine: "shine 8s ease-in-out infinite",
    },
  },
};

export default twConfig;
