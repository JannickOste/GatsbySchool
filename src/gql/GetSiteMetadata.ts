import { graphql, useStaticQuery } from "gatsby";

export type SiteMetadataType = {
    title:string; 
    description:string; 
    siteUrl:string;
}

const GetSiteMetadata = (): SiteMetadataType =>
{
    const {site: {siteMetadata}} = useStaticQuery(graphql`
        query SiteMetadata { 
            site {
                siteMetadata {
                    title
                    description 
                    siteUrl
                }
            }
        }
    `);

    return siteMetadata;
}

export default GetSiteMetadata;