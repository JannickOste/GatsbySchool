import {  Link } from "gatsby";
import React from "react";
import { GetPosts } from "../../../gql/GetPosts";
import { ThemeStyling } from "../../layout/MasterPage";

import {GatsbyImage} from "gatsby-plugin-image"
import { GetImageByFilename } from "../../../gql/GetImages";
import { ContentBox } from "../ContentBox";


type IntroBoxProps = { styling: ThemeStyling; };
export default function IntroBox({styling}: IntroBoxProps) 
{
    const {fgColor} = styling;
    const introPost = GetPosts().find(post => post.title === "Introduction");

    if(!introPost)
        return (<ContentBox styling={styling} children={<>Failed to load introduction data</>} />);

    return (
        <ContentBox styling={styling} className="row p-5" children={<>
        {
                <> {/* Intro post text -> fetched */}
                    {/* Left column*/}
                    <div className="col-md-6 d-none d-lg-flex flex-column justify-content-center align-items-center">
                        {introPost.featuredImage ? <GatsbyImage
                            image={introPost.featuredImage} alt={"A picture of a second generation pixel phone in dark or white based on the theme."}         
                            className={`w-50 d-block mx-auto align-self-center`}               
                        /> : <>Failed to load image...</>}
                        {/*<img src={introImage?.images.fallback.src as string} className="w-50 d-block mx-auto" alt="A picture of a second generation pixel phone."/>*/}
                    </div>
                    {/* Right column*/} 
                    <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                        <h1>{introPost.title}</h1>
                        <p dangerouslySetInnerHTML={{__html: introPost.content}} />
                    </div>
                    <Link to="/products/" className="text-decoration-none"><button className={`btn btn-${fgColor} mx-auto d-block w-50`}>Ga naar de device overview</button></Link>
                    
                </>
        }
        </>} />
    );  
}