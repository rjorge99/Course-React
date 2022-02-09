import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from "../calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) return <h5>Espere...</h5>;

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute isAuth={!!uid}>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute isAuth={!!uid}>
                            <CalendarScreen />
                        </PrivateRoute>
                    }
                />
                {/* <Route path="/login" element={<LoginScreen />} />
                <Route path="/" element={<CalendarScreen />} />
                <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </BrowserRouter>
    );
};
