import './App.css'
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <h1>iCount</h1>
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  // 1. Add your count state variable and setter function.

  // 2. Write a function called addToCount that adds 1 to the count.
  function addToCount() {
    // Write your code here
  }

  // 3. Write a function called resetCount that sets the count back to 0.
  function resetCount() {
    // Write your code here
  }

  return (
    <div className="counter">
      {/* 4. Build two buttons, each with an event handler  */}
      {/* The first button should add 1 to the count on click  */}
      <button>Click me</button>
      {/* The second button should reset the count on click */}
      <button>Reset Count</button>
      
      {/* 5. Change 0 to the count state variable */}
      <p>You clicked {0} times</p>
    </div>
  );
}
