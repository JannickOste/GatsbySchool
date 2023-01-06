import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image";


export const GetImages = (): IGatsbyImageData[] => {
    const {allImageSharp: {nodes}} = useStaticQuery(graphql`
        query test {
            allImageSharp {
                nodes {
                    gatsbyImageData
                }
            }   
        }
    `);

    return nodes.map((obj:any) => obj.gatsbyImageData);
}

export const GetImageByFilename = (filename:string): IGatsbyImageData|undefined =>  {
    return GetImages().find(image => [image.images.fallback?.src].reduce((count, current) => count + (current?.endsWith(filename) ? 1 : 0), 0))
}   

export default GetImages;