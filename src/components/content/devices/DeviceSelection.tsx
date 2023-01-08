import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { DeviceType } from "../../../gql/GetDevices";
import { ThemeStyling } from "../../layout/MasterPage";

export type DeviceSelectionProps = {
    devices:DeviceType[];
    onDeviceClickHandler:(id:number) => void;
    styling:ThemeStyling;
}
export const DeviceSelection = ({devices, onDeviceClickHandler, styling}: DeviceSelectionProps) => {
  const itemsEachRow = 3;
  
    return (<div className={`w-75 d-block mx-auto`}>
    {
      [...Array(Math.ceil(devices.length/itemsEachRow)).keys()].map((multiplier, rowI) => {
        return (<div key={rowI} className="row my-2 d-flex justify-content-between">
          
          {devices.slice(itemsEachRow*multiplier, itemsEachRow*(multiplier+1)).map((device, devI) => {
            return (<div key={devI} className={`col-xl-3 my-xl-0 my-sm-2 col-sm-12 p-2 bg-gradient rounded bg-${styling.bgColor} hoverable-${styling.bgColor}`} onClick={() => onDeviceClickHandler(devI+(itemsEachRow*rowI))}>
                <p className={`text-${styling.fgColor} text-center`}>{device.title}</p>

                <GatsbyImage image={device.imageData} alt={device.title} className={"d-block mx-auto rounded border"}/>
                <p className={`text-${styling.fgColor} `} style={{textAlign: "justify"}}> {/* For some reason text-justify doesnt work... */}
                  {device.shortDescription}
                </p>
            </div>);
          })}
        </div>)
      })
    }
    </div>)
}