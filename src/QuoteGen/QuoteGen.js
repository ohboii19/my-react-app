import React, { useState } from "react";
import "./QuoteGen.css";
  
  function QuoteGen() {
    const [fact, setFact] = useState("Facts");
    const [index, setIndex] = useState(0);
    const facts = [
        "SJC is a Media Company",
        "SJC Recently Accquired Assembly From Redbrick",
        "SJC was founded in 1956",
        "Tony Gagliano is Executive Chairman and CEO of the Company"

    ]
  
    return (
      <div>
        <h3>Fun Facts about SJC</h3>
        <button 
        onClick={() => setIndex((index + 1) % 4)}
        >
            Generate Fact
        </button>
        <p>{facts[index]}</p>
      </div>
    );
  }
  
  export default QuoteGen;