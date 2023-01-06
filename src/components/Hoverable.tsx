import React from "react"

export const Hoverable: React.FC<{tint:string, children:JSX.Element}> = ({children, tint}) => {
    return (<div className={tint}>{children}</div>)
}