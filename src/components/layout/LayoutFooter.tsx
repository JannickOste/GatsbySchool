import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { GetImageByFilename } from "../../gql/GetImages";
import GetSiteMetadata from "../../gql/GetSiteMetadata";

export default function LayoutFooter({styling}: {styling:any}) 
{
    const {fgColor, bgColor} = styling;

    const data = GetSiteMetadata();
    const githubLogo = GetImageByFilename("github.png")

    const footerClasses = "d-flex justify-content-center align-items-center";
    return (<footer className={`bg-${bgColor} text-${fgColor} text-decoration-none w-100 position-absolute mt-5`} style={{height: "10rem", bottom: " "}}>
        <div className="d-flex" style={{height: "100%"}}>

            <div style={{flex: 1}} className={footerClasses}>
                <a href="https://github.com/JannickOste">{githubLogo ? <GatsbyImage image={githubLogo} alt={"Github logo"} style={{width: 50, filter: `invert(${styling.bgColor === "dark" ? 1 : 0})`}} /> : <>Github</>}</a>
            </div>
            <div style={{flex: 1}} className={footerClasses}>&copy;{new Date(Date.now()).getFullYear()} - Oste Jannick</div>
            
            <div style={{flex: 1}} className={footerClasses}>
                0016 Amphitheatre Pkways,<br />
                Mountain Views, CA 430945,<br/> Verenigde Staten
            </div>
        </div>
    </footer>)
}   