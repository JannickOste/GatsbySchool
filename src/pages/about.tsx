import * as React from "react"
import { HeadFC, PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import { GetPosts } from "../gql/GetPosts"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import GetSiteMetadata from "../gql/GetSiteMetadata"
import GetAboutPageFields, { AboutUsFields } from "../gql/pages/GetAboutPageFields"

const AboutPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => {
        const {fgColor, bgColor} = style;


        const {goaldescription, goalpicture, goaltitle, missiondescription, missionpicture, missiontitle}:AboutUsFields = GetAboutPageFields();
        

        const rows = [
            {title:goaltitle, description:goaldescription, picture:goalpicture.localFile},
            {title:missiontitle, description:missiondescription, picture:missionpicture.localFile}
        ]
        

        return (<section className="w-75 d-flex flex-column mx-auto">
                {rows.map((v, i) => {
                    const reverse = i % 2 !== 0;
                    const parsedImage = getImage(v.picture);

                    return (<article key={i} className={`row bg-${bgColor} text-${fgColor} p-4 rounded my-5 d-flex ${reverse ? "flex-row-reverse" : ""}`}>
               
                        <div className="col-8" style={{textAlign: "justify"}}>
                            <p className={`h1 ${reverse ? "text-end" : ""}`}>{v.title}</p>
                            <hr />
                            <p>{v.description}</p>
                        </div>

                        <div className={`col-4 d-flex ${!reverse ? "justify-content-end" : ""}`}>
                            {parsedImage ? <GatsbyImage image={parsedImage} alt={(v.picture.altText ? v.picture.altText : "alternative text not found")} className={`w-100 rounded`}/> : <p>Failed to load about us image</p>}
                        </div>
                </article>)
                })}
            </section>
        )}
]} />)

export default AboutPage;

export const Head: HeadFC = () => {
    const {title} = GetSiteMetadata()
    return (<>

        <title>{title} - About us</title>
    </>)
  }
    