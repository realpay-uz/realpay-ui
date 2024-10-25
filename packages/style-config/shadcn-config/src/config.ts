export const config = {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "default",
    "rsc": false,
    "tsx": true,
    "tailwind": {
        "config": "tailwind.config.js",
        "css": "src/app/styles/globals.css",
        "baseColor": "stone",
        "cssVariables": true,
        "prefix": ""
    },
    "aliases": {
        "components": "shared/ui",
        "utils": "shared/lib/utils"
    }
}