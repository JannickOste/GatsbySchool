import * as React from "react"
import { PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/IntroBox"

const AboutPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => <section>About</section>
]} />)

export default AboutPage;
