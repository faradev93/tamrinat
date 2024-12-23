import { useState } from "react";
import "./App.css";
import "./global.css";
import Card from "./components/Card";
import Flexy from "./components/Flexy";

function App() {
  return (
    <div>
      <Flexy>
      {[1,2].map(()=>{return <Card/>})}
      </Flexy>
      
    </div>
  );
}

export default App;