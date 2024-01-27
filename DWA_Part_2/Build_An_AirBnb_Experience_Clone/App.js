import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="./images/img_1.png"
                rating='5.0'
                reviewCount={6}
                country="USA"
                title='Life Lessons with Katie Zaferes'
                price={136}
            />
        </div>
    )
}