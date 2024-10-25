import starlightPlugin from "@astrojs/starlight-tailwind";
import {config} from "@realpay-ui/tailwind-config";
import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  presets: [config],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@realpay-ui/button/dist/index.mjs",
  ],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.indigo,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
};
