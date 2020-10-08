import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NavigBar from "./components/NavigBar";
function App() {
  const [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <NavigBar />
      <Form
        inputTxt={inputTxt}
        todos={todos}
        setTodos={setTodos}
        setInputTxt={setInputTxt}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
