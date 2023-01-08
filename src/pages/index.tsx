import * as React from "react"
import { HeadFC, PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/IntroBox"
import GetSiteMetadata from "../gql/GetSiteMetadata"

const IndexPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => <section><IntroBox styling={style} /></section>
]} />)

export default IndexPage;

export const Head: HeadFC = () => {
    const {title} = GetSiteMetadata()
    return (<>

        <title>{title} - Home page</title>
    </>)
  }
    