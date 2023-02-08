import React, { useState } from "react";
import "./QuoteGen.css";
  
  function QuoteGen() {
    const [index, setIndex] = useState(0);
    const facts = [
        "SJC is a Media Company",
        "Diane Slater is the Vice President of Human Resources at SJC",
        "On April 1st, 2022, SJC accquired assembly from Redbrick",
        "Aaron Sundberg is the Director of Technology at Assembly",
        "SJC was founded in 1956",
        "Tyler Sebastian is a Senior Software Developer at Assembly",
        "Tony Gagliano is Executive Chairman and CEO of SJC",
        "Erika Wiedemann, P.Eng is a Senior Engineer at Assemnly"

    ]
  
    return (
      <div>
        <h3>Fun Facts about SJC and Assembly</h3>
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