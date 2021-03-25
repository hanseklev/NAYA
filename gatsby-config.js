require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `NAYA`,
    description: `Make fair trade the only trade`,
    author: `NAYA AS`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7317678593`,
        /*   access_token: "IGQVJVMnVKVFpUbnNVZAkI4bno0dFV4WGU1bmhaZAklRX1l5MldTcEhpS3VPQUQzRDg5bGl0QXJhMUFmZAXdjMzdhSUxpZAW1QZAWlYYVBjNUpJdXdUZAVphTVRWcmVrYjJ1VnM1UVFiX1dR",
        instagram_id: "17841407397804709",
        paginate: 100,
        maxPosts: 3,
        hashtags: true, */
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        verbose: true,
        url: process.env.WP_URL,
        html: {
          useGatsbyImage: true,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
