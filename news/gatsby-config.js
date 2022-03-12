module.exports = {
  siteMetadata: {
    title: `News-4-All Co.`,
    description: `ITDEV-164 Project 1: News-4 All Co.`,
    author: `Karen Santiago`,
    contact: {
      name: `Karen Santiago`,
      company: `News-4 All Co.`,
      address: ` PO Box 107`
    },
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
   },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1irlp5bv76ke`,
        accessToken: `6aMyr0T6IkTR0GKptOc4TQ9ZR2vNNtXkBqYBthGjgkw`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
