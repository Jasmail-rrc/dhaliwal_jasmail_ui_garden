import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jasmail Singh UI Component Library</h1>
        <p>Jasmail</p
        <h2>Button Component</h2>

        <div className="component-row">
          <Button label="Primary Button" />
          <Button label="Disabled Button" disabled />
        </div>

        <h2>Card Component</h2>

        <div className="component-row">
          <Card
            title="UI Garden Card"
            description="This is a reusable Card component built with React and styled-components."
          />
        </div>
      </header>
    </div>
  );
}

export default App;
