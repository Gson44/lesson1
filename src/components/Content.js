import React from 'react';
import "./Content.css"
const Content = () => {

    
    function displayAlert(){
        alert("Hello World")
    }
    /*
    const displayAlert = () => {
        alert("Hello World")
    }*/

    return (
        <div id="ContentContainer">
            <h1>Main Content</h1>
            
            <button onClick={displayAlert}>Click Me</button>
        </div>
    );
}

export default Content;
