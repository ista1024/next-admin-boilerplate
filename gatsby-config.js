module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://unpkg.com/@tabler/core@1.0.0-beta10/dist/js/tabler.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"
      },
    },
  ],
};
