import * as React from "react"
import { graphql, HeadFC, PageProps, useStaticQuery} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/home/IntroBox"
import { ContactForm } from "../components/content/contact/ContactForm"
import { GetPosts } from "../gql/GetPosts"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import GetSiteMetadata from "../gql/GetSiteMetadata"
import { ContactIntro } from "../components/content/contact/ContactIntro"
import GetContactPageFields, { ContactUsFields } from "../gql/pages/GetContactPageFields"

const ContactPage: React.FC<PageProps> = () => (<MasterPage children={[
    (styling) => {
        const fields:ContactUsFields = GetContactPageFields();
        
        const introduction = GetPosts().find(obj => obj.title === "Contact-introduction");
        const {bgColor, fgColor} = styling;

        return(<section>
            <ContactIntro styling={styling} fields={fields} />

            <ContactForm styling={styling} />
        </section>)
    }
]} />)

export default ContactPage;

export const Head: HeadFC = () => {
    const {title} = GetSiteMetadata()
    return (<>

        <title>{title} - Contact us</title>
    </>)
  }
    