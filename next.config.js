const fs = require("fs");
const util = require("util");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@zeit/next-mdx")({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false }], rehypePrism]
  }
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // eslint-disable-next-line no-undef
  enabled: process.env.ANALYZE === "true"
});

const readdir = util.promisify(fs.readdir);

module.exports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ["tsx", "mdx"],

    exportPathMap: async function() {
      const pathMap = {};
      pathMap["/"] = { page: "/" };
      pathMap["/whoami"] = { page: "/whoami" };
      pathMap["/blog"] = { page: "/blog" };
      pathMap["/form"] = { page: "/form" };
      pathMap["404.html"] = { page: "/_error" };

      const posts = await readdir("./pages/posts");

      for (const post of posts) {
        const postPath = post.replace(
          /(\d{4})(\d{2})(\d{2})\.mdx/,
          (match, p1, p2, p3) => {
            return `/blog/${p1}/${p2}/${p3}`;
          }
        );
        const pagePath = post.replace(
          /(\d{4})(\d{2})(\d{2})\.mdx/,
          (match, p1, p2, p3) => {
            return `/posts/${p1}${p2}${p3}`;
          }
        );
        pathMap[postPath] = { page: pagePath };
      }

      return pathMap;
    },

    experimental: {
      redirects() {
        return [
          {
            source: "/",
            statusCode: 301,
            destination: "https://hellorusk.net/"
          },
          {
            source: "/whoami",
            statusCode: 301,
            destination: "https://hellorusk.net/fixed/profile"
          },
          {
            source: "/whoami/",
            statusCode: 301,
            destination: "https://hellorusk.net/fixed/profile"
          },
          {
            source: "/blog/",
            statusCode: 301,
            destination: "https://hellorusk.net/blog/"
          },
          {
            source: "/blog/2020/04/07",
            statusCode: 301,
            destination: "https://hellorusk.net"
          },
          {
            source: "/blog/:content*",
            statusCode: 301,
            destination: "https://hellorusk.net/blog/:content*"
          }
        ];
      }
    }
  })
);
