import React from "react";

const Navbar = () => {
    return (
        <section id="Navbar">
            <div className="logo">
                <h1>NORDIC ROSE</h1>
            </div>
            <ul className="menu">
                <li className="active">Home</li>
                <li>About</li>
                <li>Links</li>
                <li>Projects</li>
            </ul>
        </section>
    );
};

export default Navbar;
