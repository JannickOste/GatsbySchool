import { graphql, useStaticQuery } from "gatsby";

export type AboutUsFields = {
    goaldescription:string;
    goaltitle:string;
    goalpicture:any;

    missiontitle:string;
    missiondescription:string;
    missionpicture:any;
}

export default function():AboutUsFields
{
    const {wpPage:{aboutUsFields}} = useStaticQuery(graphql`
    query {
        wpPage(title: {eq: "about-us"}) {
            aboutUsFields {
              goaldescription
              goaltitle
              goalpicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              
              missiontitle
              missiondescription
              missionpicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
    `)

    return aboutUsFields;
}