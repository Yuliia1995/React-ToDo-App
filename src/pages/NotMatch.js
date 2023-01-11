import React from "react";
import {BiErrorCircle} from "react-icons/bi"

const NotMatch = () => {
  const errorStyle = {
                //padding: "20px 0",
                //lineHeight: "1.5em",
                fontSize: "6rem",
                fontWeight: "600",
                //marginBottom: "2rem",
                color: "#ececec",
                textTransform: "lowercase",
                textAlign: "center",
  }
  return (
    <div style={{position:"relative",
    top:"20vh",}}>
      <h1
            //Style attribute for inline css works much as an object.
            //Dashes are subbed with cammelCase
            style={errorStyle}><BiErrorCircle/>  404</h1><h1 style={errorStyle}> Page Not Found</h1>
            <p style={{textAlign:"center", marginTop: "2rem"}}>Make sure you've entered a correct URL</p>
    </div>
  )
}
export default NotMatch