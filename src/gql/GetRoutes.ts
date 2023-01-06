    import { graphql, useStaticQuery } from "gatsby"

    export type RouteType = {
        path:string;
        text:string;
    }

    const routeLabels = [
        {path:"/", name: "Home"},
        {path:"/product/", name: "Devices"}
    ]
    
    export const GetRoutes = (noStatusRoutes:boolean = true): RouteType[] => {
        const {pages: {nodes}} = useStaticQuery(graphql`
            query RouteQuery {
                pages: allSitePage {
                    nodes {
                        path
                    }
                }
            }`);


        return (nodes).map((r:{path:string}) => {
            const label = routeLabels.find(routeLabel => routeLabel.path === r.path)?.name;
            
            return {
                path:r.path,
                text:label?label:"no-name"
            }
        }).filter((r: RouteType) => noStatusRoutes ? !/(.*?)[0-9]+(.*?)/.test(r.path) : true);
    }
