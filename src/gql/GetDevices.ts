import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image";

export type DeviceType = {
    title:string;
    content:string;
    os:string;
    processor:string;
    ram:string;
    display:string;
    frontCamera:string;
    rearCamera:string;
    battery:string;
    imageData:IGatsbyImageData;
    shortDescription:string;
}

export const GetDevices = ():DeviceType[] => {
    const {allWpPhone:{nodes}} = useStaticQuery(graphql`
        query MyImageQuery {
            allWpPhone {
                nodes {
                    title
                    content
                    phone {
                        os
                        processor
                        ram 
                        display
                        frontCamera
                        rearCamera
                        battery
                        shortDescription
                        image {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    
    return nodes.map((result: any): DeviceType => {
        const {title, content, phone} = result;
        const {os, processor, ram, display, frontCamera, rearCamera, battery, shortDescription, image:{localFile:{childImageSharp: {gatsbyImageData}}}} = phone;

        return {
            title:title,
            content:content,
            os:os,
            processor:processor,
            ram:ram,
            display:display,
            frontCamera:frontCamera,
            rearCamera:rearCamera,
            battery:battery,
            imageData:gatsbyImageData,
            shortDescription:shortDescription
        };
    })
}