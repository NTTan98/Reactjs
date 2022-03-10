import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./style.scss";
import { Form, Input, Button, Checkbox } from "antd";

const Register = () => {
  const handleFinish = (value) => {
    axios
      .post("https://todo-nodemy.herokuapp.com/user/register", {
        username: value.username,
        password: value.password,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 7,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
