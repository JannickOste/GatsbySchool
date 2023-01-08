import { graphql, useStaticQuery } from "gatsby";

export type ContactUsFields = {
    description:string;
    title:string; 
    picture:any; 
    address:string;
    city:string;
    email:string;
    phonenumber:string;
    zipcode:string;
    facebook:string;
    instagram:string
}


export default function(): ContactUsFields
{
    const {wpPage: {contactUsFields}} = useStaticQuery(graphql`
    query fieldsQuery {
        wpPage(slug: {eq: "contact"})
        {
          contactUsFields {
            description
            title
            picture {
              id
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            address
            city
            email
            phonenumber
            zipcode
            facebook
            instagram
          }
        }
      }
    `);

    return contactUsFields;
}