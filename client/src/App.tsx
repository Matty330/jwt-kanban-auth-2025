import { AuthService } from "./utils/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import KanbanBoard from "./pages/KanbanBoard"; // ✅ Keep it without .tsx extension

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return AuthService.isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      {/* ✅ FIX: Change the parent route to `path="*"` to handle all paths */}
      <Route path="*" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/kanban" element={<PrivateRoute><KanbanBoard /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
