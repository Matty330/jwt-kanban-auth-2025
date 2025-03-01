import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Board from "./pages/KanbanBoard";
import ErrorPage from "./pages/ErrorPage";
import EditTicket from "./pages/EditTicket";
import CreateTicket from "./pages/CreateTicket";
import Login from "./pages/Login";

console.log("✅ main.tsx is executing...");  // 🟢 Debug log

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Board /> },
      { path: "/edit", element: <EditTicket /> },
      { path: "/create", element: <CreateTicket /> },
      { path: "/login", element: <Login /> }
    ]
  }
]);

const rootElement = document.getElementById("root");
console.log("🔎 rootElement:", rootElement); // 🟢 Debug log

if (rootElement) {
  console.log("✅ React is mounting..."); // 🟢 Debug log
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error("❌ ERROR: #root div not found in index.html!");
}
