import React from "react"
import Trollface from "../images/Trollface.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={Trollface}></img>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">Project 3</h4>
        </header>
    )
}