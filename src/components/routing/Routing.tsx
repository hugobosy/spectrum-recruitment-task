import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home.component";
import { RegisterForm } from "../../pages/register-form/RegisterForm.component";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RegisterForm />} />
  </Routes>
);