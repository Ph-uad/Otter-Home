import React from 'react';
import Classes from './footer.module.css';


const Footer = () =>{

    const footerDetails = [
        {
            title : "head office",
            contextList : [" 123, boradway street, Narroway Town, updown hill"]
        },
        {
            title: "Support",
            contextList : ["Mr Independent", "Vices Over familly", "Promise Land", "Mr Lonley"]
        },
        {
            title: "Otters",
            contextList : ["Newsletters", "Blog", "Housing Forecast", "Get Hired"]
        }
    ]

    const footerContent = footerDetails.map((content, index) =>{
        const List = content.contextList.map((list, index) => <p key={index} className="paragraph"> {list}</p>)

        return(
            <ul className="list" key={index}>
                <h3 className="heading--tertiary">{content.title}</h3>
                {List}        
            </ul>
        )
    })

    return(
        <div className={Classes["footer"]}>
           <li className={`flex ${Classes["footer__topline"]}`}>{footerContent}
           </li> 
           <div className={`flex mt ${Classes['footer__baseline']}`}>
           <span className={Classes["footer-copyright"]}>
                626-designs All Rights Reserved
            </span>
            <span>socials</span>
           </div>
            
        </div>
    )
    
}
export default Footer