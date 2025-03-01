import { AuthService } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
