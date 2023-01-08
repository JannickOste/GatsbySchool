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
 * MasterPage aka layout component
 * @param children Callable child component creator, (uses callbacks to allow for default middleware between master render and component)
 * 
 * @returns React.Fragment
 */
export const MasterPage = ({children}: {children:((styling: ThemeStyling) => JSX.Element)[]}) => {

    const [state, setState] = React.useState<{darkMode:boolean}>({darkMode: true}); // Switch removed due to not having access to localstorage while using SSR (woeps)
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
                    }
                ]
            } 
            
            bodyAttributes={{
                class: `d-flex flex-column min-vh-100 bg-${themeClasses.primary.secondaryColor}`
            }}
            />
            <div className="min-vh-100 position-relative">

                <LayoutHeader styling={themeClasses.header} toggleDarkMode={onThemeSwitch} />
                <LayoutBody children={children.map((child) => child(themeClasses.primary))} styling={themeClasses.main} />
                <LayoutFooter styling={themeClasses.footer} />
            </div>
        </React.Fragment>
    )
}