import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX({
  mdxOptions: {
    // remarkPlugins: [remarkInstall(), remarkHeading],
    // rehypePlugins: [
    //   [
    //     rehypeCode({
    //       themes: ["poimandres", "github-dark-default"],
    //       defaultLanguage: "typescript",
    //     }),
    //   ],
    // ],
    rehypeCodeOptions: {
      mergeWhitespaces: true,
    },
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@realpay-ui/button"],
};

export default withMDX(config);
