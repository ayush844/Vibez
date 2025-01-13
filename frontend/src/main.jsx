import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Sidebar from "./components/Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <Sidebar />
      <App />
    </div>
  </StrictMode>
);
