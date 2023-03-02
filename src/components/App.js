import React, { Component } from "react";

import "./App.css"

class App extends Component {
    render() {
        return (
            <div id="welcome--container">
                <h2 id="welcome--title">Welcome!</h2>
                <p id="welcome--text">This is a basic React setup using webpack and babel. It's a good starting point for developing a React application.</p>
            </div>
        )
    }
}

export default App;