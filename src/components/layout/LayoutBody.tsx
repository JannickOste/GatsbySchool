import * as React from "react";

export const LayoutBody = ({styling, children}: {children: JSX.Element[], styling:any})=> {

    return (
        <main className={`d-flex flex-column justify-content-center`} style={{minHeight: "100%"}}>
            {children.map((v, i) => <React.Fragment key={i}>{v}</React.Fragment>)}
        </main>
    )
}