import React from "react";

export default function ColorForm(props){

    // Controls all styling some sections have a conditional to add extra options

    return(   
        <div className="ColorForm">
                <p>{props.title}</p>
                <div className="textInputs">
                <div>
                <label>Background Color:</label>
                <input
                    type="text"
                    placeholder='Background Color'
                    name="backgroundColor"
                    onChange={props.handleChange}
                    value={props.backgroundColor}
                />
                </div>
               {props.showInput && <div>
               <label>Text Color:</label> 
               <input
                    type="text"
                    placeholder='Text color'
                    name="color"
                    onChange={props.handleChange}
                    value={props.color}
                />
                </div> }
                {props.showInput && <div>
                <label>Border Color:</label>
                <input
                    type="text"
                    placeholder='Border Color'
                    name="borderColor"
                    onChange={props.handleChange}
                    value={props.borderColor}
                />
                </div>}
                </div>
    {props.showInput &&  <ul>
                    <li>
                        <label htmlFor="border"> Thick Border</label>
                        <input
                            type="checkbox"
                            id="border"
                            name="borderCheck"
                            onChange={props.handleChange}
                            value={props.borderCheck}
                            checked={props.borderCheck}
                            />
                        </li>
                    <li>
                        <label htmlFor="boldtext">Bold Text</label>
                        <input 
                            type="checkbox" 
                            id="bold" 
                            name="fontWeightCheck"
                            onChange={props.handleChange}
                            value={props.fontWeightCheck}
                            checked={props.fontWeightCheck}
                         />
                        </li>
                    <li>
                        <label htmlFor="textShadow">Text Shadow</label>
                        <input 
                            type="checkbox" 
                            id="textShadow" 
                            name="textShadowCheck"
                            onChange={props.handleChange}
                            value={props.textShadowCheck}
                            checked={props.textShadowCheck}
                        />
                    </li>
        {props.showOption &&  <li>
                        <label htmlFor="boxShadow">Box Shadow</label>
                        <input 
                        type="checkbox" 
                        id="boxShadow" 
                        name="boxShadowCheck"
                        onChange={props.handleChange}
                        value={props.boxShadowCheck}
                        checked={props.boxShadowCheck}
                        />
                    </li>}
        {props.showOption && <li>
                        <label htmlFor="roundedCorners">Rounded Corners</label>
                        <input 
                        type="checkbox" 
                        id="roundedCorners" 
                        name="borderRadiusCheck"
                        onChange={props.handleChange}
                        value={props.borderRadiusCheck}
                        checked={props.borderRadiusCheck}
                        />
                    </li>}
                </ul> }
                </div>
    )
}
