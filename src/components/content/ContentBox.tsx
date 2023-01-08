import React from "react"
import { ThemeStyling } from "../layout/MasterPage"

export const ContentBox  = ({styling, children, className, style}: {children:JSX.Element, styling:ThemeStyling, className?:string, style?:React.CSSProperties}) => {
    return (<article className={`rounded my-3 bg-${styling.bgColor} text-${styling.fgColor}${(className ? " "+className : "")}`} style={(style ? style : {})}>
        {children}
    </article>)
}