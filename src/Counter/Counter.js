import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <h3>Counter</h3>
            <div
            className="Buttons"
            >
            <button
            className="Button"
            onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
            className="Button"
            onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            <button
            className="Button"
            onClick={() => setCount(0)}
            >
                Clear
            </button>
            </div>
            <p>
            {count}
            </p>
        </div>
    )
}

export default Counter;