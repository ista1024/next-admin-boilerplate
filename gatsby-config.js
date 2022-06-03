module.exports = {
  siteMetadata: {
    title: "ADMIN CONSOLE",
    APIUrl: `http://localhost:8000/`,
    APIFormat: {
      header: {
        trId: "210100",
        function: "get_chal",
      },
      body: {
        id: "LoveBTS",
      },
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://unpkg.com/@tabler/core@1.0.0-beta10/dist/js/tabler.min.js",
      },
    },
  ],
};
