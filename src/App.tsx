import React from "react";
import PeriodicTabe from "./pages/PeriodicTabe";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app-name">
        <h1>Periodic Table</h1>
        <small>by atomkern</small>
      </div>
      <PeriodicTabe />
    </>
  );
}

export default App;
