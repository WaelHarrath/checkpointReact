import React from "react";

function Form({ setInputTxt, inputTxt, todos, setTodos }) {
  const inputTxtChanger = (event) => {
    setInputTxt(event.target.value);
  };
  const toDoChanger = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputTxt, completed: false, id: Math.random() * 1000 },
    ]);
    setInputTxt("");
  };
  return (
    <form>
      <input
        value={inputTxt}
        onChange={inputTxtChanger}
        type="text"
        className="todo-input"
      />
      <button onClick={toDoChanger} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
export default Form;
