import React, { useState } from "react";
import Todo from "./Todo";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
const TodoList = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClickAdd = () => {
    setData([{ name: input }, ...data]);
    setInput("");
  };
  const deleteData = (name) => {
    let currentData = data;
    currentData = currentData.filter((item) => item.name !== name);
    setData(currentData);
  };
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h1>TodoList</h1>
      <Input
        value={input}
        placeholder="Todo List"
        onChange={handleInput}
        suffix={
          <Button type="primary" disabled={!input} onClick={handleClickAdd}>
            Add
          </Button>
        }
      />
      <Todo data={data} deleteData={deleteData} />
    </div>
  );
};

export default TodoList;
