import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [isToken, setToken] = useState(false);
  let navigate = useNavigate();
  const handleFinish = (value) => {
    axios
      .post("https://todo-nodemy.herokuapp.com/user/login", {
        username: value.username,
        password: value.password,
      })
      .then((res) => {
        const Token = res.data.token;
        if (Token) {
          setToken(true);
        } else {
          setToken(false);
        }
        localStorage.setItem("Token", Token);
        console.log("Posting data");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (isToken) {
      console.log(isToken);
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isToken]);

  return (
    <div className="Login__Form">
      <h2>Login</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            // onChange={handleOnChangeUserName}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
