import * as React from "react"
import { HeadFC, PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import { GetPosts } from "../gql/GetPosts"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import GetSiteMetadata from "../gql/GetSiteMetadata"
import GetAboutPageFields, { AboutUsFields } from "../gql/pages/GetAboutPageFields"
import { ContentBox } from "../components/content/ContentBox"

const AboutPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => {
        const {fgColor, bgColor} = style;


        const {goaldescription, goalpicture, goaltitle, missiondescription, missionpicture, missiontitle}:AboutUsFields = GetAboutPageFields();
        

        const rows = [
            {title:goaltitle, description:goaldescription, picture:goalpicture.localFile},
            {title:missiontitle, description:missiondescription, picture:missionpicture.localFile}
        ]
        

        return (<section className="d-flex flex-column mx-auto">
                {rows.map((v, i) => {
                    const reverse = i % 2 !== 0;
                    const parsedImage = getImage(v.picture);

                    return (<ContentBox key={i} styling={style} className={`row p-5 rounded my-5 d-flex ${reverse ? "flex-row-reverse" : ""}`} children={<>
                        <div className="col-xl-8 col-12" style={{textAlign: "justify"}}>
                            <p className={`h1 ${reverse ? "text-end" : ""}`}>{v.title}</p>
                            <hr />
                            <p>{v.description}</p>
                        </div>

                        <div className={`col-xl-4 d-xl-flex d-none ${!reverse ? "justify-content-end" : ""}`}>
                            {parsedImage ? <GatsbyImage image={parsedImage} alt={(v.picture.altText ? v.picture.altText : "alternative text not found")} className={`w-100 rounded`}/> : <p>Failed to load about us image</p>}
                        </div>
                    </>} />)
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
    