import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const Todo = ({ data, deleteData }) => {
  const handleRemoveItem = (name) => {
    deleteData(name);
  };

  return (
    <div>
      {data.map((data) => (
        <Button
          block
          style={{
            marginTop: "10px",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
          }}
          size={"large"}
          key={data.id}
        >
          <span>{data.name}</span>
          <span name={data.name} onClick={() => handleRemoveItem(data.name)}>
            <CheckOutlined style={{ color: "green" }} />
          </span>
        </Button>
      ))}
    </div>
  );
};

export default Todo;
