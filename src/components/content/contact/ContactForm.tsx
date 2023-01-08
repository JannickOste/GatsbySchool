import React, { useState } from "react"
import { ThemeStyling } from "../../layout/MasterPage";

type ContactFormMessage = {
    firstName:string;
    lastName:string;
    email:string;
    subject:string;
    message:string;
}

type ContactFormState = ContactFormMessage & {
    info?:string|undefined;
}

export const ContactForm = ({styling}:{styling:ThemeStyling}) => {
    // initializers required, otherwise count function for submit doesnt work without specifying fields length manualy = bad 
    const [state, setState] = useState<ContactFormState>({firstName: "", lastName: "", email: "", subject: "", message: ""});
    const {fgColor, bgColor, secondaryColor} = styling;

    const handleSubmit = (event: any) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        (async() => {
            try
            {
                await fetch("/contact/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData as any).toString(),
                  });
                  
                setState({...state, info: "Message send!"})
            } 
            catch(err)
            {
                setState({...state, info: (err as Error).message})
            }
        })();
    }
      

    return (<article className={`text-${fgColor} bg-${bgColor} rounded p-5 w-100 my-5`}>
        <strong className="h1 fw-bold">Leave a message:</strong>

        {state.info ? (<div className={`bg-${fgColor} mt-5 p-2 text-${bgColor} mb-5 rounded`}>{state.info}</div>) : (<hr className="my-5" />)}

        <form action="POST" name="contact" onSubmit={(ev) => {ev.preventDefault(); handleSubmit(ev);}} className={`d-flex flex-column`} data-netlify={true}>
            {["firstName", "lastName", "email", "subject"].map((v, i) => {
                const sanitizedName = (v[0].toUpperCase()+v.slice(1)).replace(/(?!^)(?=[A-Z])/, " ");

                return (<div key={i} className="row my-2">
                    <label htmlFor={v} className="col-4 fw-bold">{sanitizedName}</label>
                    <input type="text" id={v} name={v} placeholder={sanitizedName} className="col-8" onChange={(ev) => {
                        let newState = state;
                        Object.assign(newState, Object.fromEntries([[v, ev.target.value]]));
                        
                        return setState(newState);
                    }} />
                </div>) 
            })}
            
            <hr className="my-5"/>
            <textarea id="message" name="message" className="row" placeholder="Your message" onChange={(ev) => setState({...state, message: ev.target.value})}/>
            <hr className="my-5"/>
            <input type="hidden" name="form-name" value="contact" />
            <input type="submit" value={"Send"} className={`btn btn-${fgColor}`} /> {/*disabled={Object.values(state).reduce((count, cur) => count + (!cur.length ? 1 : 0), 0) > 0}*/}
        
        </form>
    </article>)
}