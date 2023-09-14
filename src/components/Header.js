import React from "react"

function Header() {
    return (
        <header>
            <div className="header-content-container">
                <img className="globe-img" src={require("../images/small-globe-black.png")}></img>
                <h3>my travel journal.</h3>
            </div>
        </header>
    )

}

export default Header