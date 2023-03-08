import React from "react";
import close from "../images/close.svg"

export default function Styling(props){

    // div that shows all styles being used

    function createContent(style){
        return(
            <div className="sectionStyle">
                <h4>{style.title}</h4>
                {style.backgroundColor !== undefined && <div>
                     <label>backgroundColor:</label>
                     <p>{`${style.backgroundColor}`}</p>
                </div>}
                {style.color !== undefined && <div>
                    <label>color:</label>
                    <p>{`${style.color}`}</p>
                </div>}
                {style.borderWidth !== undefined &&<div>
                    <label>borderWidth:</label>
                    <p>{`${style.border()}`}</p>
                </div>}
                {style.borderColor !== undefined && <div>
                    <label>borderColor:</label>
                    <p>{`${style.borderColor}`}</p>
                </div>}
                {style.fontWeight !== undefined && <div>
                    <label>fontWeight:</label>
                    <p>{`${style.fontWeight()}`}</p>
                </div>}
                {style.textShadow !== undefined && <div>
                    <label>textShadow:</label>
                    <p>{`${style.textShadow()}`}</p>
                </div>}
                {style.boxShadow !== undefined && <div>
                    <label>boxShadow:</label>
                    <p>{`${style.boxShadow()}`}</p>
                </div>}
                {style.borderRadius !== undefined && <div>
                    <label>borderRadius:</label>
                    <p>{`${style.borderRadius()}`}</p>
            </div>}
            </div>
        )
    }

    return(
    <div className="Styling">
        <div className="stylingContainer">
            {createContent(props.headerStyle)}
            <div className="divider"></div>
            {createContent(props.contentStyle)}
            <div className="divider"></div>
            {createContent(props.buttonStyle)}
            <div className="divider"></div>
            {createContent(props.backgroundStyle)}
            <div className="divider"></div>
            {createContent(props.sidebarStyle)}
            <div className="divider"></div>
            {createContent(props.footerStyle)}
            <img src={close} onClick={props.handleDisplayStyling}/>
        </div>
    </div>
    )
}
