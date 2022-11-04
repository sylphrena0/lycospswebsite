module.exports = {
  pathPrefix: `orgs/sps`,
  siteMetadata: {
    title: `SPS Lycoming`,
    description: `Website for the Lycoming College Chapter of the Society of Physics Students`,
    siteUrl: `http://lycostu.lycoming.edu/orgs/sps/`
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};