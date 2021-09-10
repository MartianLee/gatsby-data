/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // gatsbyRemarkPlugins: [
        //   `gatsby-remark-prismjs`,
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 1000,
        //       linkImagesToOriginal: false,
        //       withWebp: true,
        //     },
        //   },
        // ],
      },
    },
    'gatsby-plugin-emotion',
  ],
  siteMetadata: {
    title: 'SEONGHWA BLOG',
    description: 'web dev porfolio',
    copyright: 'This is copyright 2021 seonghwa',
    contact: 'me@seonghwakr.com',
  },
}
