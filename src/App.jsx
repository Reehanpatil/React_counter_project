import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  // thise function is add the value
  const addvalue = () => {
    counter = counter + 1;
    setcounter(counter);
  };

  // thise function is remove  the value
  const removevalue = () => {
    setcounter(counter - 1);
    if (counter === 0) {
      setcounter(counter);
    }
  };

  return (
    <>
      <h1>Basic Counter Using React js</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
