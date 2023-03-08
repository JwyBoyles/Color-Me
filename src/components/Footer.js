import React from "react";

export default function Footer(props){

    const style = {
        backgroundColor: props.footerStyle.backgroundColor,
        color: props.footerStyle.color,
        borderWidth: props.footerStyle.border(),
        borderColor: props.footerStyle.borderColor,
        fontWeight: props.footerStyle.fontWeight(),
        textShadow: props.footerStyle.textShadow(),
    }

    return(
        <div className="Footer" style={style}>
        <p>Made By Jacob Boyles</p>
        </div>
    )
}

