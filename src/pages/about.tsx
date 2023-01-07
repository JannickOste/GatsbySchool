import * as React from "react"
import { PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import { GetPosts } from "../gql/GetPosts"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const AboutPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => {
        const posts = GetPosts();
        const [aboutPost, missionPost] = [posts.find(post => post.title === "About-us"), posts.find(post => post.title === "Mission")];
        const {fgColor, bgColor} = style;

        const getHeading = (title:string) => `<h1>${title}</h1><hr />`


        return (<section className="w-75 d-flex flex-column mx-auto">
                <article className={`row bg-${bgColor} text-${fgColor} p-4 rounded my-5`}>
                    {aboutPost 
                    ? <>
                        <div className="col-8" dangerouslySetInnerHTML={{__html: getHeading(aboutPost?.title.replace("-", " "))+aboutPost.content}} style={{textAlign: "justify"}}></div>
                        <div className="col-4 d-flex justify-content-end">
                            {aboutPost.featuredImage ? <GatsbyImage image={aboutPost.featuredImage} alt={"Company owner"} /> : <p>Failed to load about us image</p>}
                        </div>
                    </>
                    : <>
                        Failed to load about us data...
                    </>}
                </article>

                <article className={`row bg-${bgColor} text-${fgColor} p-4 rounded my-5`}>
                    {missionPost 
                    ? <>
                        <div className="col-4 d-flex justify-content-end">
                            
                            {missionPost.featuredImage ? <GatsbyImage image={missionPost.featuredImage} alt={"Random company face"} style={{borderRadius: "50%"}} /> : <p>Failed to load about us image</p>}
                        </div>
                        <div className="col-8" dangerouslySetInnerHTML={{__html:getHeading(missionPost?.title.replace("-", " "))+missionPost.content}}  />
                            
                    </>
                    : <>
                        Failed to load mission data...
                    </>}
                </article>
            </section>
        )}
]} />)

export default AboutPage;
