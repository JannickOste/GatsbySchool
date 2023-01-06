import { graphql, StaticQueryDocument, useStaticQuery } from "gatsby"
import combineQuery from 'graphql-combine-query'
import gql from 'graphql-tag'
import DocumentNode from 'graphql-tag'

type SiteMetadata = {
    title:string;
    description:string|null;
    siteUrl:string;
}

type SiteRoute = {path:string;}

export enum DataAPIAction 
{
    SiteMetadata, SiteRoute
}

export class DataAPI extends Object 
{
    private actionQueue:DataAPIAction[] = [];
    private actionMapping:Map<DataAPIAction, string> = new Map<DataAPIAction, string>([
        [DataAPIAction.SiteMetadata, 
            `
            query HeaderQuery {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                    }
                }
            }
        `],
        [DataAPIAction.SiteRoute, 
            `
            query RouteQuery {
                pages: allSitePage {
                    nodes {
                        path
                    }
                }
            }
        `]
    ]);

    private actionResults:Map<DataAPIAction, any> = new Map<DataAPIAction, any>();

    public addAction = (...actions:DataAPIAction[]) => [...this.actionQueue, ...actions];
    public clearAction = (...actions:DataAPIAction[]) => {
        this.actionQueue = this.actionQueue.filter(obj => !actions.includes(obj));
        [...this.actionResults.keys()].filter(k => actions.includes(k)).forEach(k =>  this.actionResults.delete(k));
    }

    private getQuery(action:DataAPIAction): string|Error
    {
        const actionQuery = this.actionMapping.get(action);
        if(actionQuery === undefined)
            throw new Error(`No query found for action: ${action}`);
        
        return actionQuery;
    }

    public performActions = () => {
        /*const test  = ([this.getQuery(DataAPIAction.SiteMetadata)] as ReadonlyArray<string>) as TemplateStringsArray;//(this.actionQueue.map(action => this.getQuery(action) as string) as ReadonlyArray<string>) as TemplateStringsArray;
        console.dir(test);*/

        //console.dir(JSON.stringify(useStaticQuery(test as TemplateStringsArray)))
    }

    public get SiteRoutes():SiteRoute[] 
    {
        const {pages: {nodes}} = useStaticQuery(graphql`
            query RouteQuery {
                pages: allSitePage {
                    nodes {
                        path
                    }
                }
            }
        `);

        return nodes;
    }


}