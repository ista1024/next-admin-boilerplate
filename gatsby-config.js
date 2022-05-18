module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js'
      }
    }

  ],
}
