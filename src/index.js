import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //Routing within the app
//Component file
import TodoContainer from "./functionBased/components/TodoContainer";
//import "./App.css" // Way to import App.css to index.js
ReactDOM.render(
<React.StrictMode>
  <BrowserRouter> 
    <TodoContainer />
  </BrowserRouter>
</React.StrictMode>, document.getElementById("root"));