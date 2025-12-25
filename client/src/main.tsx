import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter"; // make sure wouter is imported
import App from "./App";
import "./index.css";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== location.pathname) {
  history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <Router base="/code_adventures_website">
    <App />
  </Router>
);
