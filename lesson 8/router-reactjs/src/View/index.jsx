import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
import Home from "../Components/Home/index";
import Calc from "../Components/Calc/Calc";
import Drum from "../Components/Drum/Drum";
import SearchBasic from "../Components/SearchBasic/search";
import TomatoTimer from "../Components/TomatoTimer/TomatoApp";
import SearchAdvanced from "../Components/SearchAdvanced/SearchAdvanced";
import TodoList from "../Components/TodoList/TodoList";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/calc"}>Calculator</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/drum"}>Drum</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/searchBasic"}>Search Basic</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/TomatoTimer"}>Tomato Timer</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/SearchAdvanced"}>Search Advanced</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/TodoList"}>TodoList</Link>
          </Menu.Item>
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/drum" element={<Drum />} />
          <Route path="/searchBasic" element={<SearchBasic />} />
          <Route path="/TomatoTimer" element={<TomatoTimer />} />
          <Route path="/SearchAdvanced" element={<SearchAdvanced />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
