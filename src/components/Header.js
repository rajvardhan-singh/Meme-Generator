import React from "react";

export default function Header(){

    return(
        <header className ="header">
            <img src="images/troll-face.png" className="header--img"/>
            <h2 className="header--title"> Meme Generator</h2>
            <h4 className="header--project"> Welcome Meme-o-holic</h4>
        </header>
    );
}