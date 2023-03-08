import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'
import Styling from './components/Styling';
import {React, useState} from 'react';
import { headerPresets, backgroundPresets, bodyPresets, buttonPresets, sidebarPresets, footerPresets  } from './presetStyles';
import './App.css';

function App() {

  // All sections have state which sets styling

  const [headerStyle, setHeaderStyle] = useState({
    title: "Header",
    backgroundColor: "",
    color: "",
    borderColor: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } }
  })

  const [footerStyle, setFooterStyle] = useState({
    title: "Footer",
    backgroundColor: "",
    color: "",
    borderColor: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } }
  })

  const [sidebarStyle, setSidebarStyle] = useState({
    title: "Sidebar",
    backgroundColor: "",
    color: "",
    borderColor: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } }
  })

  const [backgroundStyle, setBackgroundStyle] = useState({
    title: "Background",
    backgroundColor: "",
  })

  const [contentStyle, setContentStyle] = useState({
    title: "Main Body",
    backgroundColor: "",
    color: "",
    borderWidth: "",
    borderColor: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    boxShadowCheck: false,
    borderRadiusCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } },
    boxShadow: function() {if (this.boxShadowCheck === true) {
      return "2px 2px 2px black"
    } else {
      return "none"
    } },
    borderRadius: function() {if (this.borderRadiusCheck === true) {
      return "5rem / 5rem"
    } else {
      return "0"
    } },
  })

  const [buttonStyle, setButtonStyle] = useState({
    title: "Button",
    backgroundColor: "red",
    color: "white",
    borderWidth: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    boxShadowCheck: false,
    borderRadiusCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } },
    boxShadow: function() {if (this.boxShadowCheck === true) {
      return "2px 2px 2px black"
    } else {
      return "none"
    } },
    borderRadius: function() {if (this.borderRadiusCheck === true) {
      return "5rem / 5rem"
    } else {
      return "0"
    } },
  })

  // Brings up div that shows all styling that is being used

  const [displayStyling, setDisplayStyling] = useState(false)

  function handleDisplayStyling(){
    setDisplayStyling(!displayStyling)
  }

  // Lets user change style values through a form

  function handleChangeContent(event){
    if (event.target.type === "text"){
      setContentStyle(prevValue => {
        return{
          ...prevValue,
          [event.target.name]: event.target.value
        }
      })
    }
      if (event.target.type === "checkbox") {
        setContentStyle(prevValue => {
          return{
            ...prevValue,
            [event.target.name]: event.target.checked
          }
        })
      }
  }

  function handleChangeBackground(event){
    setBackgroundStyle(prevValue => {
      return{
        ...prevValue,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleChangeHeader(event){
    if (event.target.type === "text"){
    setHeaderStyle(prevValue => {
      return{
        ...prevValue,
        [event.target.name]: event.target.value
      }
    })
  }
    if (event.target.type === "checkbox") {
      setHeaderStyle(prevValue => {
        return{
          ...prevValue,
          [event.target.name]: event.target.checked
        }
      })
    }
  }

  function handleChangeFooter(event){
    if (event.target.type === "text"){
      setFooterStyle(prevValue => {
        return{
          ...prevValue,
          [event.target.name]: event.target.value
        }
      })
    }
      if (event.target.type === "checkbox") {
        setFooterStyle(prevValue => {
          return{
            ...prevValue,
            [event.target.name]: event.target.checked
          }
        })
      }
  }

  function handleChangeSidebar(event){
    if (event.target.type === "text"){
      setSidebarStyle(prevValue => {
        return{
          ...prevValue,
          [event.target.name]: event.target.value
        }
      })
    }
      if (event.target.type === "checkbox") {
        setSidebarStyle(prevValue => {
          return{
            ...prevValue,
            [event.target.name]: event.target.checked
          }
        })
      }
  }

  function handleChangeButton(event){
    if (event.target.type === "text"){
      setButtonStyle(prevValue => {
        return{
          ...prevValue,
          [event.target.name]: event.target.value
        }
      })
    }
      if (event.target.type === "checkbox") {
        setButtonStyle(prevValue => {
          return{
            ...prevValue,
            [event.target.name]: event.target.checked
          }
        })
      }
  }

  // premade styles and a counter to navigate through the array

  const [count, setCount] = useState(0)

  function setPresetStyle() {

    setHeaderStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: headerPresets[count].backgroundColor,
        color: headerPresets[count].color,
        borderColor: headerPresets[count].borderColor,
        borderCheck: headerPresets[count].borderWidth,
        fontWeightCheck: headerPresets[count].fontWeight,
        textShadowCheck: headerPresets[count].textShadow,
      }
    })

    setBackgroundStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: backgroundPresets[count].backgroundColor,
      }
    })

    setContentStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: bodyPresets[count].backgroundColor,
        color: bodyPresets[count].color,
        borderColor: bodyPresets[count].borderColor,
        borderCheck: bodyPresets[count].borderWidth,
        fontWeightCheck: bodyPresets[count].fontWeight,
        textShadowCheck: bodyPresets[count].textShadow,
        boxShadowCheck: bodyPresets[count].boxShadow,
        borderRadiusCheck: bodyPresets[count].borderRadius,
      }
    })

    setSidebarStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: sidebarPresets[count].backgroundColor,
        color: sidebarPresets[count].color,
        borderColor: sidebarPresets[count].borderColor,
        borderCheck: sidebarPresets[count].borderWidth,
        fontWeightCheck: sidebarPresets[count].fontWeight,
        textShadowCheck: sidebarPresets[count].textShadow,
      }
    })

    setButtonStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: buttonPresets[count].backgroundColor,
        color: buttonPresets[count].color,
        borderColor: buttonPresets[count].borderColor,
        borderCheck: bodyPresets[count].borderWidth,
        fontWeightCheck: bodyPresets[count].fontWeight,
        textShadowCheck: bodyPresets[count].textShadow,
        boxShadowCheck: bodyPresets[count].boxShadow,
        borderRadiusCheck: bodyPresets[count].borderRadius,
      }
    })

    setFooterStyle(prevValue => {
      return{
        ...prevValue,
        backgroundColor: footerPresets[count].backgroundColor,
        color: footerPresets[count].color,
        borderColor: footerPresets[count].borderColor,
        borderCheck: footerPresets[count].borderWidth,
        fontWeightCheck: footerPresets[count].fontWeight,
        textShadowCheck: footerPresets[count].textShadow,
      }
    })

    setCount(count + 1)
    if (count === headerPresets.length - 1) {
      setCount(0)
    }
  }

  // returns all sections to default styling

  function resetStyle() {
    setHeaderStyle({
    title: "Header",
    backgroundColor: "",
    color: "",
    borderColor: "",
    borderCheck: false,
    textShadowCheck: false,
    fontWeightCheck: false,
    border: function() {if (this.borderCheck === true) {
      return "5px"
    } else {
      return "2px"
    } },
    textShadow: function() {if (this.textShadowCheck === true) {
      return "1px 1px 2px black"
    } else {
      return "none"
    } },
    fontWeight: function() {if (this.fontWeightCheck === true) {
      return "bold"
    } else {
      return "normal"
    } }
      })

      setContentStyle({
      title: "Main Body",
      backgroundColor: "",
      color: "",
      borderWidth: "",
      borderColor: "",
      borderCheck: false,
      textShadowCheck: false,
      fontWeightCheck: false,
      boxShadowCheck: false,
      borderRadiusCheck: false,
      border: function() {if (this.borderCheck === true) {
        return "5px"
      } else {
        return "2px"
      } },
      textShadow: function() {if (this.textShadowCheck === true) {
        return "1px 1px 2px black"
      } else {
        return "none"
      } },
      fontWeight: function() {if (this.fontWeightCheck === true) {
        return "bold"
      } else {
        return "normal"
      } },
      boxShadow: function() {if (this.boxShadowCheck === true) {
        return "2px 2px 2px black"
      } else {
        return "none"
      } },
      borderRadius: function() {if (this.borderRadiusCheck === true) {
        return "5rem / 5rem"
      } else {
        return "0"
      } },
    })

    setBackgroundStyle({
      title: "Background",
      backgroundColor: "",
    })

    setButtonStyle({
      title: "Button",
      backgroundColor: "red",
      color: "white",
      borderWidth: "",
      borderCheck: false,
      textShadowCheck: false,
      fontWeightCheck: false,
      boxShadowCheck: false,
      borderRadiusCheck: false,
      border: function() {if (this.borderCheck === true) {
        return "5px"
      } else {
        return "2px"
      } },
      textShadow: function() {if (this.textShadowCheck === true) {
        return "1px 1px 2px black"
      } else {
        return "none"
      } },
      fontWeight: function() {if (this.fontWeightCheck === true) {
        return "bold"
      } else {
        return "normal"
      } },
      boxShadow: function() {if (this.boxShadowCheck === true) {
        return "2px 2px 2px black"
      } else {
        return "none"
      } },
      borderRadius: function() {if (this.borderRadiusCheck === true) {
        return "5rem / 5rem"
      } else {
        return "0"
      } },
    })

    setSidebarStyle({
      title: "Sidebar",
      backgroundColor: "",
      color: "",
      borderColor: "",
      borderCheck: false,
      textShadowCheck: false,
      fontWeightCheck: false,
      border: function() {if (this.borderCheck === true) {
        return "5px"
      } else {
        return "2px"
      } },
      textShadow: function() {if (this.textShadowCheck === true) {
        return "1px 1px 2px black"
      } else {
        return "none"
      } },
      fontWeight: function() {if (this.fontWeightCheck === true) {
        return "bold"
      } else {
        return "normal"
      } }
    })

    setFooterStyle({
      title: "Footer",
      backgroundColor: "",
      color: "",
      borderColor: "",
      borderCheck: false,
      textShadowCheck: false,
      fontWeightCheck: false,
      border: function() {if (this.borderCheck === true) {
        return "5px"
      } else {
        return "2px"
      } },
      textShadow: function() {if (this.textShadowCheck === true) {
        return "1px 1px 2px black"
      } else {
        return "none"
      } },
      fontWeight: function() {if (this.fontWeightCheck === true) {
        return "bold"
      } else {
        return "normal"
      } }
    })
  }


  return (
    <div className="App">
      <Sidebar
      handleChangeContent={handleChangeContent}
      handleChangeBackground={handleChangeBackground}
      handleChangeHeader={handleChangeHeader}
      handleChangeFooter={handleChangeFooter}
      handleChangeSidebar={handleChangeSidebar}
      handleChangeButton={handleChangeButton}
      handleDisplayStyling={handleDisplayStyling}
      displayStyling={displayStyling}
      sidebarStyle={sidebarStyle}
      backgroundStyle={backgroundStyle}
      contentStyle={contentStyle}
      headerStyle={headerStyle}
      footerStyle={footerStyle}
      buttonStyle={buttonStyle}
      resetStyle={resetStyle}
      />
      <div className='content'>
      <Header 
      headerStyle={headerStyle}
      />
      <Body
      backgroundStyle={backgroundStyle}
      contentStyle={contentStyle}
      buttonStyle={buttonStyle}
      setPresetStyle={setPresetStyle}
       />
      <Footer 
      footerStyle={footerStyle}
      />
    </div>
    {displayStyling && <Styling 
      sidebarStyle={sidebarStyle}
      backgroundStyle={backgroundStyle}
      contentStyle={contentStyle}
      headerStyle={headerStyle}
      footerStyle={footerStyle}
      buttonStyle={buttonStyle}
      handleDisplayStyling={handleDisplayStyling}
      />}
    </div>
  );
}

export default App;
