import React from "react";

function WelcomeJSX() {
    const description = "JSX allows you to write HTML in JavaScript . It makes it easier to create React components.It stands for javascript xml";
    
    return (
        <div>
            <h1>Welcome to JSX</h1>
            <p>{description}</p>
        </div>
    );
}

export default WelcomeJSX;
