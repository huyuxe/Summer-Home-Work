import React from 'react'
import {v4 as uuid} from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
  }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText ==="") {
      return;
    }
    //カードを追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      }
    ])
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="入力しよう" 
        className="taskAddInput"
        onChange={handleChange}
        value={inputText}
        />
      </form>
    </div>
  
}
