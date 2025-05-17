import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/baymoh-studio">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
