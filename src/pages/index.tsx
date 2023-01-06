import * as React from "react"
import { PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/IntroBox"

const IndexPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => <section><IntroBox styling={style} /></section>
]} />)

export default IndexPage;
