import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./index.scss";

const Todo = ({ data, deleteData }) => {
  const handleRemoveItem = (name) => {
    deleteData(name);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      {data.map((data) => (
        <Button block size={"large"} key={data.name}>
          <span>{data.name}</span>
          <span
            className="Check__Complete"
            name={data.name}
            onClick={() => handleRemoveItem(data.name)}
          >
            <CheckOutlined style={{ color: "green" }} />
          </span>
        </Button>
      ))}
    </div>
  );
};

export default Todo;
