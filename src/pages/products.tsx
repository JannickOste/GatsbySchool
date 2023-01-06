import { HeadFC } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { DeviceOverview } from "../components/content/DeviceOverview";
import { DeviceSelection } from "../components/content/DeviceSelection";
import { MasterPage, ThemeStyling } from "../components/layout/MasterPage";
import { GetDevices } from "../gql/GetDevices";

type ProductsState = {
  focusedId?:number;
}


export default function Product() 
{
  const [state, setState] = useState<ProductsState>();

  const devices = GetDevices().sort((a, b) => a.title.localeCompare(b.title))
  const deviceSelected = state?.focusedId !== undefined && state.focusedId >= 0;

  
  const components: ((styling:ThemeStyling) => JSX.Element)[] = 
  [
    (styling) => <div className={`w-75 d-block mx-auto bg-${styling.bgColor} text-${styling.fgColor} rounded p-2 text-center my-2 d-flex justify-content-${deviceSelected ? "end" : "center"}`}>
      {!deviceSelected ? <>Click on a device to expand.</> : <button className={`btn btn-${styling.fgColor} d-inline ml-auto`} onClick={() => setState({...state, focusedId: -1})}>Return to selection</button>}
    </div>,

    ...(deviceSelected
      /*Device selected */
      ? [(styling: ThemeStyling) => <DeviceOverview phone={devices.at(state.focusedId as number)} styling={styling} />] 
      /*Device selection */
      : [(styling: ThemeStyling) => <DeviceSelection devices={devices} styling={styling} onDeviceClickHandler={(index) => setState({...state, focusedId: index})} />])
    ]


  return (<MasterPage children={components} />)
}

