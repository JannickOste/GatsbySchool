import * as React from "react"
import { PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/IntroBox"
import { ContactForm } from "../components/content/ContactForm"
import { GetPosts } from "../gql/GetPosts"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const ContactPage: React.FC<PageProps> = () => (<MasterPage children={[
    (styling) => {
        const introduction = GetPosts().find(obj => obj.title === "Contact-introduction");
        const {bgColor, fgColor} = styling;

        return(<section className="d-flex flex-column w-75 mx-auto justify-content-around">
            <div className={`bg-${bgColor} text-${fgColor} rounded p-5 mt-5 row d-flex justify-content-between`}>
                <div className="col-xl-4 d-xl-flex d-none">
                    <GatsbyImage image={introduction?.featuredImage as IGatsbyImageData} alt={"Designer"} className={`d-block mx-auto w-50 align-self-center d-flex`} />
                </div>  
                <div className="col-xl-8 col-12">
                    {introduction !== undefined ? (<p dangerouslySetInnerHTML={{__html:introduction.content}} />) : <p>Failed to load introduction text...</p>} 
                </div>
            </div>
            <ContactForm styling={styling} />
        </section>)
    }
]} />)

export default ContactPage;
