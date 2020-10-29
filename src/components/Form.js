import React from "react";

function Form({ setInputTxt, inputTxt, todos, setTodos,setStatus }) {
  const inputTxtChanger = (event) => {
    setInputTxt(event.target.value);
  };
  const toDoChanger = (e) => {
    e.preventDefault();
    if (inputTxt ==="")
    {alert ("can't add an empty TODO !!")}
    else
    {setTodos([
      ...todos,
      { text: inputTxt, completed: false, id: Math.random() * 1000 },
    ]);}
    setInputTxt("");
  };
  const handleStatus =(e)=>{
    setStatus(e.target.value);
  }
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
      <div className="select">
      <select onChange={handleStatus}  name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
      </select>
      </div>
    </form>

  );
}
export default Form;
