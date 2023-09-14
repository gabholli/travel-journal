import React from "react"
import ReactDOM from "react-dom/client"

import './App.css';
import data from "./data"
import Section from "./components/Section"
import Header from "./components/Header"

console.log(data)

function App() {
    const sections = data.map(section => {
        return (
            <Section
                key={section.title}
                section={section}
            />
        )
    })

    return (
        <div>
            <Header />
            {sections}
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

export default App;
