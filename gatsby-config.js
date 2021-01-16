require("dotenv").config()
const { sanity } = require("./client-config")

module.exports = {
  siteMetadata: {
    title: `NAYA`,
    description: `Naya is good`,
    author: `Hans Erling Klevstad`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
       url: process.env.WP_URL,
       excludeFieldNames: [`actionMonitorActions`, `actionMonitorAction`, `actionMonitorActionBy`],
       develop: {
        hardCacheMediaFiles: true,
        hardCacheData: true,
      },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index_images`,
        path: `${__dirname}/.wordpress-cache/naya.no/wp-content/uploads/2020/10`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NAYA`,
        short_name: `NAYA`,
        start_url: `/`,
        background_color: `#fbfaf7`,
        theme_color: `#655A46`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
