import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth, children }) => {
    console.log(isAuth);
    return isAuth ? children : <Navigate to="/auth/login" />;
};
