import { graphql, useStaticQuery } from "gatsby"

export type PostType = {
    title:string;
    content:string;
    data:string;
}

export const GetPosts = (): PostType[] => {
    const {allWpPost: {nodes}} = useStaticQuery(graphql`
        query AllPostQuery { 
            allWpPost {
                nodes {
                    title
                    content
                    date
                }
            }
        }
    `);

    return nodes;
}
