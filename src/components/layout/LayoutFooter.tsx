import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { GetImageByFilename } from "../../gql/GetImages";
import GetSiteMetadata from "../../gql/GetSiteMetadata";

export default function LayoutFooter({styling}: {styling:any}) 
{
    const data = GetSiteMetadata();
    const githubLogo = GetImageByFilename("github.png")
    return (<footer className={`mt-auto d-block bg-${styling.bgColor} text-${styling.fgColor} text-center row d-flex justify-content-between align-items-center`} style={{height: "5rem"}}>
        <div className="col-4">
            <a href="">{githubLogo ? <GatsbyImage image={githubLogo} alt={"Github logo"} style={{width: 50, filter: `invert(${styling.bgColor === "dark" ? 1 : 0})`}} /> : <>Github</>}</a>
        </div>
        <div className="col-4">Derp</div>
        <div className="col-4">&copy;{new Date(Date.now()).getFullYear()} - Oste Jannick</div>
    </footer>)
}   