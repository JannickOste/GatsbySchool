import {  Link } from "gatsby";
import React from "react";
import { GetPosts } from "../../gql/GetPosts";
import { ThemeStyling } from "../layout/MasterPage";

import {GatsbyImage} from "gatsby-plugin-image"
import { GetImageByFilename } from "../../gql/GetImages";


type IntroBoxProps = { styling: ThemeStyling; };
export default function IntroBox({styling}: IntroBoxProps) 
{
    const {bgColor, fgColor, secondaryColor} = styling;
    const introPost = GetPosts().find(post => post.title === "Introductie");
    const introImage = GetImageByFilename(`intro-${styling.bgColor}.png`);

    return (
         <article className={`w-75 bg-${bgColor} h-50 my-auto rounded row p-5 border mx-auto border-${secondaryColor} hoverable-${bgColor} text-${fgColor}`}>
                {
                    introPost 
                    ? 
                        <> {/* Intro post text -> fetched */}
                            {/* Left column*/}
                            <div className="col-md-6 d-none d-lg-block d-flex flex-column justify-content-center align-items-center">
                                {introImage ? <GatsbyImage
                                    image={introImage} alt={"A picture of a second generation pixel phone in dark or white based on the theme."}         
                                    className={`w-50 d-block mx-auto align-self-center`}               
                                 /> : <>Failed to load image...</>}
                                {/*<img src={introImage?.images.fallback.src as string} className="w-50 d-block mx-auto" alt="A picture of a second generation pixel phone."/>*/}
                            </div>

                            {/* Right column*/} 
                            <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                                <h1>{introPost.title}</h1>
                                <p dangerouslySetInnerHTML={{__html: introPost.content}} />
                                <Link to="/products/" className="text-decoration-none"><button className={`btn btn-${fgColor} mx-auto d-block`}>Ga naar de device overview</button></Link>
                            </div>
                        </>
                    : <> {/* Intro post text -> failed to load */}

                        Something went wrong when attempting to load introduction data...
                    </>
                }

        </article>
        
    );  
}