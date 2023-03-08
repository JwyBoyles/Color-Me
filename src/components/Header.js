import React from "react";

export default function Header(props){

    const headerStyle = {
        backgroundColor: props.headerStyle.backgroundColor,
        color: props.headerStyle.color,
        borderWidth: props.headerStyle.border(),
        borderColor: props.headerStyle.borderColor,
        fontWeight: props.headerStyle.fontWeight(),
        textShadow: props.headerStyle.textShadow(),
    }

    return(
        <div className="Header" style={headerStyle}>
        <p>Color Me!</p>
        </div>
    )
}