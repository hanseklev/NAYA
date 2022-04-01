import path from "path"

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `NAYA`,
    description: `Make fair trade the only trade`,
    author: `NAYA AS`,
  },
  plugins: [
   /*  {
      resolve: "gatsby-source-wordpress",
      options: {
        verbose: true,
        url: process.env.WP_URL,
        schema: {
          requestConcurrency: 10,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
        html: {
          useGatsbyImage: true,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
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
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-179541154-1", // Google Analytics
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
  ],
}
