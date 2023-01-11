import React from "react";
import {IoMdPerson} from "react-icons/io";
import {MdSettingsApplications} from "react-icons/md";

const About = () => {
    return (
    <div className="main__content"> 
        <h1><MdSettingsApplications/>  About the App</h1>
        <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>
        <h1><IoMdPerson/>  About the Author</h1>
        <p>This app was developed by Yuliia Hlamazdenko, an aspiring software engineer and current student at Year Up.</p>
        <p>If you have any questions for Yuliia, you can reach her at: <a href="https://www.yuliiah.com/" target="_blank" rel="noreferrer" style={{color:"#336566fa"}}>yuliiah.com</a></p>
        
    </div>


    )
}
export default About