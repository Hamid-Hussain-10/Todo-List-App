import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import "./input.css";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <>
      <form className="simple-form" onSubmit={handleSubmit}>
        <input
          type=""
          value={inputValue}
          className="form-input"
          placeholder="Enter something..."
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit" className="form-button">
          Add Task
        </button>
      </form>
      <div className="data">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index}>
                <span>{curTask}</span>
                <button >
                  <IoCheckmarkCircle onClick={handleClearAll}/>
                </button>
                <button>
                  <MdDeleteForever onClick={() => handleDelete(curTask)}/>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SimpleForm;
