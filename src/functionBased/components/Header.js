import React from "react";

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
      }
    return (
        <header style={headerStyle}>
            <h1
            //Style attribute for inline css works much as an object.
            //Dashes are subbed with cammelCase
            style={{
                fontSize: "6rem",
                fontWeight: "600",
                marginBottom: "2rem",
                lineHeight: "1em",
                color: "#336566fa",
                textTransform: "lowercase",
                textAlign: "center",
                
            }}>ToDos</h1>
        </header>
    )
}
export default Header