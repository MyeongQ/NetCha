import React from "react";
import Navigation from '../components/Navigation';
import Layout from "../components/Layout";

function About() {
    return (
        <div className="App">
            <Layout/>
            <h1>About this page : I built it.</h1>
            <Navigation/>
        </div>
    )
}

export default About;