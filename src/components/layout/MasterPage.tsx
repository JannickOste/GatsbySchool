import { graphql, HeadFC, Link, StaticQuery } from "gatsby"
import * as React from "react"
import {Helmet} from "react-helmet";
import { LayoutBody } from "./LayoutBody";
import LayoutFooter from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";

export type ThemeStyling = {
    bgColor:string;
    fgColor:string;
    secondaryColor:string;
}

/**
 * Layout component aka MasterPage => https://guides.lib.umich.edu/c.php?g=282834&p=1884599
 * @param children Callable child component creator, (uses callbacks to )
 * @returns React.Fragment
 */
export const MasterPage = ({children}: {children:((styling: ThemeStyling) => JSX.Element)[]}) => {
    const [state, setState] = React.useState<{darkMode:boolean}>({darkMode: localStorage.getItem("dark") === "1"});
    const themeClasses: {[key:string]: ThemeStyling}= {
        primary: {
            bgColor: state.darkMode ? "dark" : "light",
            fgColor: !state.darkMode ? "dark" : "light",
            secondaryColor: "secondary"
        },
        /** Just including this for extendebility */
        header: {
            bgColor: state.darkMode ? "dark" : "light",
            fgColor: !state.darkMode ? "dark" : "light",
            secondaryColor: "secondary"
        },
        main: {
            bgColor: state.darkMode ? "dark" : "light",
            fgColor: !state.darkMode ? "dark" : "light",
            secondaryColor: "secondary"
        },
        footer: {
            bgColor: state.darkMode ? "dark" : "light",
            fgColor: !state.darkMode ? "dark" : "light",
            secondaryColor: "secondary"
        }
    }

    const onThemeSwitch = () => {
        const newMode = !state.darkMode;
        setState({...state, darkMode: newMode})
        let locStorage = typeof window === undefined ? require("localstorage-polyfill") : localStorage;
        
        localStorage.setItem("dark", newMode  ? "1" : "0");
    }
    
    return (
        <React.Fragment>
            <Helmet link={
                [
                    {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
                        integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
                        crossOrigin: "anonymous"
                    },
                    {
                        rel: "stylesheet",
                        href: "/main.css"
                    }
                ]
            } 
            
            bodyAttributes={{
                class: `d-flex flex-column bg-${themeClasses.primary.secondaryColor}`
            }}
            />
            
            <LayoutHeader styling={themeClasses.header} toggleDarkMode={onThemeSwitch} />
            <LayoutBody children={children.map((child) => child(themeClasses.primary))} styling={themeClasses.main} />
            <LayoutFooter styling={themeClasses.footer} />
        </React.Fragment>
    )
}

export const Head: HeadFC = () => {

    return (<>

        <title> Page</title>
    </>)
  }
  