import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react"
import { ContactUsFields } from "../../../gql/pages/GetContactPageFields";
import { ThemeStyling } from "../../layout/MasterPage"

type ContactIntroProps = {
    styling: ThemeStyling;
    fields:ContactUsFields;
}

export const ContactIntro = ({styling, fields}: ContactIntroProps) => {
    const {bgColor, fgColor} = styling;
    const {title, description, picture, address, city, email, phonenumber, zipcode, facebook, instagram} = fields;
    const imageData: IGatsbyImageData | undefined = getImage(picture.localFile);

    return (<article className={`bg-${bgColor} row text-${fgColor} p-5 rounded mt-5`}>
        <div className="col-xl-6 col-12">
            <h1 className={`h1`}>{title}</h1>
            {description}
            <hr />
            <a href={`mailto:${email}`} className={`d-block text-success`}>{email}</a>
            <a href={`tel:${phonenumber}`} className={`text-success`}>{phonenumber}</a>

            <div>
                {address},<br />
                {city} {zipcode}
            </div>
        </div>
        <div className="col-xl-6 d-none d-xl-flex justify-content-center align-items-middle">
            {imageData ? <GatsbyImage image={imageData} alt={""} style={{borderRadius: "50%"}}  /> : <>Failed to load contact introduction image</>}
        </div>
    </article>)
}