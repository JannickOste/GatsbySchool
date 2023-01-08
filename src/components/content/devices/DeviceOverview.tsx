import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { DeviceType } from "../../../gql/GetDevices";
import { ThemeStyling } from "../../layout/MasterPage";

export type DeviceOverviewProps = {
    styling:ThemeStyling;
    phone:DeviceType|undefined;
}

export const DeviceOverview = ({phone, styling}: DeviceOverviewProps) => {
    const {bgColor, fgColor} = styling;
    return (phone ? (<article className={` bg-${bgColor} row d-flex justify-content-between p-5`}>
            
            <div className="col-xl-8 col-12">
              <p className={`text-${fgColor} h2`}>{phone.title}</p>
              <p dangerouslySetInnerHTML={{__html: phone.content}} className={`text-${fgColor}`} />
            </div>

            <div className="col-xl-3 col-12">
              <GatsbyImage image={phone.imageData} alt={phone.title} className="d-none d-xl-block rounded border" />

              <div className={`text-${fgColor} row border rounded border-${fgColor} mt-5`}>
                {Object.entries(phone)
                  .filter(s => !["title", "content", "imageData", "shortDescription"].includes(s[0]))
                  .map(s => (<>
                    <div className="col-5">{s[0][0].toUpperCase()+s[0].replace(/(?!^)(?=[A-Z])/, " ").toLocaleLowerCase().slice(1)}</div>
                    <div className="col-7">{s[1] as string}</div>
                  </>))}
              </div>
            </div>

          </article>) : <>Failed to fetch device data</>)
}