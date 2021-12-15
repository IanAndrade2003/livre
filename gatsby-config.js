module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "livre",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "livredata",
        fieldName: "livredata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvyavpig3qj501wd0zr0fzlk/master"
      }
    }
  ],
};