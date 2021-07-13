module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby site with strapi deployed on render",
  },
  plugins: ["gatsby-plugin-gatsby-cloud", {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`article`, `user`],
      singleTypes: [],
    },
  },],
};
