import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home.component";
import { RegisterForm } from "../../pages/register-form/RegisterForm.component";
import { RoutingTypes } from "./Routing.types";

export const Routing: React.FC<RoutingTypes> = ({ tab }) => (
  <Routes>
    <Route path="/" element={<Home tab={tab} />} />
    <Route path="/register" element={<RegisterForm tab={tab} />} />
  </Routes>
);
