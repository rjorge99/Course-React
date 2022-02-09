import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: "Jorge Reyes"
            }
        });

        const lastPath = localStorage.getItem("lastPath") || "/";

        navigate(lastPath, {
            replace: true
        });
    };

    return (
        <div className="container mt-5">
            <div>Login</div>
            <hr />

            <button onClick={handleLogin} className="btn btn-primary">
                Login
            </button>
        </div>
    );
};
