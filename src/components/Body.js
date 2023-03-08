import React from "react";

export default function Body(props){

    const contentStyle = {
        backgroundColor: props.contentStyle.backgroundColor,
        color: props.contentStyle.color,
        borderWidth: props.contentStyle.border(),
        borderColor: props.contentStyle.borderColor,
        fontWeight: props.contentStyle.fontWeight(),
        textShadow: props.contentStyle.textShadow(),
        borderRadius: props.contentStyle.borderRadius(),
        boxShadow: props.contentStyle.boxShadow(),
    }

    const buttonStyle = {
        backgroundColor: props.buttonStyle.backgroundColor,
        color: props.buttonStyle.color,
        borderWidth: props.buttonStyle.border(),
        borderColor: props.buttonStyle.borderColor,
        fontWeight: props.buttonStyle.fontWeight(),
        textShadow: props.buttonStyle.textShadow(),
        borderRadius: props.buttonStyle.borderRadius(),
        boxShadow: props.buttonStyle.boxShadow(),
    }


    return(
        <div className="Body" style={props.backgroundStyle}>
            <div className="squareOne" style={contentStyle}>
                <p className="titleText" style={{color: props.contentStyle.borderColor}}>Color Anything</p>
                <p className="bodyText">This is website for creating and testing out color schemes. 
                Every single element on this page can be modified and played around with.
                So head over to the form in sidebar and get to coloring!</p> 
                <p className="bodyText"> "Color is a power which directly influences the soul." - Wassily Kandinsky</p>
                <p className="bodyText">"I found I could say things with color and shapes that I couldn't say any other way." - Georgia O'Keeffe</p>
                <p className="bodyText">"We live in a rainbow of chaos." - Paul Cézanne</p>
                <button className="bodyButton" onClick={props.setPresetStyle} style={buttonStyle}>Generate a color scheme</button>    
            </div>
        </div>
    )
}

