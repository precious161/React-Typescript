import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
