import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Memoized from "./components/Memoized";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  function expensiveCalculation(num){
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  return (
    <div className="App">
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {/* <hr /> */}
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr/>
      <h2>Memoized</h2>
      <Memoized/>
    </div>
  );
}

export default App;
