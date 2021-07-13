module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby site with strapi deployed on render",
  },
  plugins: ["gatsby-plugin-gatsby-cloud", {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.NODE_ENV // production environement variable (from render.com)
          ? "https://strapi-deployed-on-render.onrender.com" // production environement (⚠️ remove trailing / slash)
          : "http://localhost:1337", // developement environement
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`article`, `user`],
      singleTypes: [],
    },
  },],
};
