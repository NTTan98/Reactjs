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
  const ViewData = [
    {
      element: <Home />,
      path: "/",
      label: "Home",
    },
    {
      element: <Calc />,
      path: "/calc",
      label: "Calculator",
    },
    {
      element: <Drum />,
      path: "/drum",
      label: "Drum",
    },
    {
      element: <SearchBasic />,
      path: "/searchBasic",
      label: "Search Basic",
    },
    {
      element: <TomatoTimer />,
      path: "/TomatoTimer",
      label: "Tomato Timer",
    },
    {
      element: <SearchAdvanced />,
      path: "/SearchAdvanced",
      label: "Search Advanced",
    },
    {
      element: <TodoList />,
      path: "/TodoList",
      label: "TodoList",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Menu mode="horizontal">
          {ViewData.map((item) => (
            <Menu.Item>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Routes>
          {ViewData.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
