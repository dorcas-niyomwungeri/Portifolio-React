import { useState } from "react";

function App() {
  const names = ["Dorcas", "John", "Alice", "David", "Grace"];

  const [index, setIndex] = useState(0);

  function changeName() {
    // To go to next name
    if (index < names.length - 1) {
      setIndex(index + 1);
    } else {
      // Go back to the first name
      setIndex(0);
    }
  }

  return (
    <div>
      <h1>{names[index]}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default App;