import type { GatsbyConfig } from "gatsby";

/**
 * Rule of tumb: 
 * -> TSX => JSX files (react)
 * -> TS  => Vanilla ts
 */

/**
 * Got a corrupt boot due to removing edge using powershell. 
 * Didnt push to remote repo yet, soooo yeaaay i could start over again 2-3 days before having to deliver ':)
 */

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pixels`,
    siteUrl: `https://gatsbyschool.oste.dev`,
    github: "jannickoste"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "http://gatsbyschool.oste.dev/yeeshidothisfornothavinganobviousaccespointjnsnidsnvinsuivdndsiunisudcids"
      }
    }, 
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": { syntax: `postcss-scss` }
        },
  
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components",
  ],  
};

export default config;
