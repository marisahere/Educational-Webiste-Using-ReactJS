import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//export browser router
import { BrowserRouter as Router } from "react-router-dom";

//import course context provider
import CourseContextProvider from "./Components/Course Context/CourseContext.jsx";

createRoot(document.getElementById("root")).render(
  <CourseContextProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </CourseContextProvider>
);
