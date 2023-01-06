import * as React from "react"
import { PageProps} from "gatsby"
import { MasterPage } from "../components/layout/MasterPage"
import IntroBox from "../components/content/IntroBox"

const ContactPage: React.FC<PageProps> = () => (<MasterPage children={[
    (style) => <section>Contact</section>
]} />)

export default ContactPage;
