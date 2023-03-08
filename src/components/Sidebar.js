import {React, useState} from "react";
import ColorForm from "./ColorForm";

export default function Sidebar(props){

    // Passing props into new value for stlye to so that the object methods do not cause errors
    
    const style = {
        backgroundColor: props.sidebarStyle.backgroundColor,
        color: props.sidebarStyle.color,
        borderWidth: props.sidebarStyle.border(),
        borderColor: props.sidebarStyle.borderColor,
        fontWeight: props.sidebarStyle.fontWeight(),
        textShadow: props.sidebarStyle.textShadow(),
    }

    // Controls which form should be rendered

    const [formSwitch, setFormSwitch] = useState({
        box: true,
        body: false,
        header: false,
        footer: false,
        sidebar: false,
        button: false,
        button: false,
    })

    function boxForm() {
        setFormSwitch({
            box: true,
            body: false,
            header: false,
            footer: false,
            sidebar: false,
            button: false,
        })
    }
    

    function backgroundForm() {
        setFormSwitch({
            box: false,
            body: true,
            header: false,
            footer: false,
            sidebar: false,
            button: false,
        })
    }

    function headerForm() {
        setFormSwitch({
            box: false,
            body: false,
            header: true,
            footer: false,
            sidebar: false,
            button: false,
        })
    }

    function footerForm() {
        setFormSwitch({
            box: false,
            body: false,
            header: false,
            footer: true,
            sidebar: false,
            button: false,
        })
    }

    function sidebarForm() {
        setFormSwitch({
            box: false,
            body: false,
            header: false,
            footer: false,
            sidebar: true,
            button: false,
        })
    }

    function buttonForm() {
        setFormSwitch({
            box: false,
            body: false,
            header: false,
            footer: false,
            sidebar: false,
            button: true,
        })
    }
    

    return(
        <div className="Sidebar" style={style}>
        <ul>
            <li>Color</li>
            <li>Everything</li>
            <li>You</li>
            <li>See</li>
        </ul>
        <div className="formBox">
        <div className="selectionPanel">
        <div onClick={boxForm} style={formSwitch.box ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Box</div>
        <div onClick={backgroundForm} style={formSwitch.body ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Background</div>
        <div onClick={headerForm} style={formSwitch.header ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Header</div>
        <div onClick={footerForm} style={formSwitch.footer ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Footer</div>
        <div onClick={sidebarForm} style={formSwitch.sidebar ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Sidebar</div>
        <div onClick={buttonForm} style={formSwitch.button ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>Button</div>
        </div>
        {formSwitch.box && <ColorForm 
             handleChange={props.handleChangeContent}
             backgroundColor={props.contentStyle.backgroundColor}
             color={props.contentStyle.color}
             borderColor={props.contentStyle.borderColor}
             borderRadiusCheck={props.contentStyle.borderRadiusCheck}
             boxShadowCheck={props.contentStyle.boxShadowCheck}
             fontWeightCheck={props.contentStyle.fontWeightCheck}
             textShadowCheck={props.contentStyle.textShadowCheck}
             borderCheck={props.contentStyle.borderCheck}
             showInput={true}
             showOption={true}
             title="Main Body"
             />}
        {formSwitch.body && <ColorForm 
             handleChange={props.handleChangeBackground}
             backgroundColor={props.backgroundStyle.backgroundColor}
             showInput={false}
             title="Background"
             />}
        {formSwitch.header && <ColorForm 
             handleChange={props.handleChangeHeader}
             backgroundColor={props.headerStyle.backgroundColor}
             color={props.headerStyle.color}
             borderColor={props.headerStyle.borderColor}
             fontWeightCheck={props.headerStyle.fontWeightCheck}
             textShadowCheck={props.headerStyle.textShadowCheck}
             borderCheck={props.headerStyle.borderCheck}
             showInput={true}
             title="Header"
             />}
        {formSwitch.footer && <ColorForm 
             handleChange={props.handleChangeFooter}
             backgroundColor={props.footerStyle.backgroundColor}
             color={props.footerStyle.color}
             borderColor={props.footerStyle.borderColor}
             fontWeightCheck={props.footerStyle.fontWeightCheck}
             textShadowCheck={props.footerStyle.textShadowCheck}
             borderCheck={props.footerStyle.borderCheck}
             showInput={true}
             title="Footer"
             />}
            {formSwitch.sidebar && <ColorForm 
             handleChange={props.handleChangeSidebar}
             backgroundColor={props.sidebarStyle.backgroundColor}
             color={props.sidebarStyle.color}
             borderColor={props.sidebarStyle.borderColor}
             fontWeightCheck={props.sidebarStyle.fontWeightCheck}
             textShadowCheck={props.sidebarStyle.textShadowCheck}
             borderCheck={props.sidebarStyle.borderCheck}
             showInput={true}
             title="Sidebar"
             />}
            {formSwitch.button && <ColorForm 
             handleChange={props.handleChangeButton}
             backgroundColor={props.buttonStyle.backgroundColor}
             color={props.buttonStyle.color}
             borderColor={props.buttonStyle.borderColor}
             borderRadiusCheck={props.buttonStyle.borderRadiusCheck}
             boxShadowCheck={props.buttonStyle.boxShadowCheck}
             fontWeightCheck={props.buttonStyle.fontWeightCheck}
             textShadowCheck={props.buttonStyle.textShadowCheck}
             borderCheck={props.buttonStyle.borderCheck}
             showInput={true}
             showOption={true}
             title="Button"
             />}
            <button className="showStyleSheet" onClick={props.handleDisplayStyling}>Show Styling</button>
            <button className="clearStyleSheet" onClick={props.resetStyle}>Clear All Styling</button>              
        </div>
        </div>
    )
}
