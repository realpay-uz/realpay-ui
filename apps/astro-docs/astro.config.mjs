import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Docs with Tailwind",
    social: {
      github: "https://github.com/withastro/starlight"
    },
    sidebar: [{
      label: "Guides",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Example Guide",
        slug: "guides/example"
      }]
    }, {
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }, {
      label: "Components",
      autogenerate: {
        directory: "components"
      }
    }],
    customCss: ["./src/tailwind.css"]
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});