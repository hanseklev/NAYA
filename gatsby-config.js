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
       excludeFieldNames: [`schemaMd5`],
   
       develop: {
        hardCacheMediaFiles: true,
        hardCacheData: true,
      },
      },
    },
  /*   {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        api: 'naya.no',
        https: true,
        api_keys: {
          consumer_key: process.env.WOO_KEY,
          consumer_secret: process.env.WOO_SECRET,
        },
        fields: ['products', 'products/categories', 'products/attributes']
      }
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
