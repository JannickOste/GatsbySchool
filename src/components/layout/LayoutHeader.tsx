import { graphql, HeadFC, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { DataAPI, DataAPIAction } from "../../DataAPI";
import { GetRoutes } from "../../gql/GetRoutes";
import GetSiteMetadata from "../../gql/GetSiteMetadata";

export const LayoutHeader = ({styling: styles, toggleDarkMode}: {styling:any, toggleDarkMode:()=>void}) =>
{
    const {title} = GetSiteMetadata();

    const routes: any[] = GetRoutes();

        return (<>
            <header className={`w-100 bg-${styles.bgColor} text-${styles.fgColor} p-2 px-3 d-flex justify-content-between align-items-middle m-0 `}>
                <Link to={"/"} className="m-0 h1 text-decoration-none">{title}</Link>
                <div className="d-flex align-items-center justify-content-between">
                    {routes.map((route:any, i:number) => {
                        return (
                            <Link key={i} to={route.path} className={`text-${styles.fgColor} h5 px-1 text-decoration-none`} 
                                onMouseEnter={(ev) => (ev.target as HTMLAnchorElement).setAttribute("style", `filter: brightness(${.5*(styles.bgColor === "dark" ? 1 : 6) })`)}
                                onMouseLeave={(ev) => (ev.target as HTMLAnchorElement).setAttribute("style", "filter: brightness(1)")}
                            >{route.text}</Link>
                        )
                    })}
    
                    <button className="border-0 h5" style={{backgroundColor: "transparent"}} onClick={toggleDarkMode}>🌓</button>
                </div>
            </header>
        </>)
}

