import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image";

export type PostType = {
    title:string;
    content:string;
    data:string;
    featuredImage?:IGatsbyImageData;
}

export const GetPosts = (): PostType[] => {
    const {allWpPost: {nodes}} = useStaticQuery(graphql`
        query AllPostQuery { 
            allWpPost {
                nodes {
                    title
                    content
                    date
                
                featuredImage {
                    node {
                    
                    gatsbyImage(width: 800)
                    }
                }
                }
            }
        }
    `);

    return nodes.map((node: any) => {
        const {featuredImage: {node: {gatsbyImage}}} = node;

        return {
            ...node, 
            featuredImage:gatsbyImage
        }
    });
}
