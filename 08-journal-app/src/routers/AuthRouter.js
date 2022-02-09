import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path="auth/login" element={<LoginScreen />} />
                    <Route path="auth/register" element={<RegisterScreen />} />
                    <Route
                        path="*"
                        element={<Navigate replace to="/auth/login" />}
                    />
                </Routes>
            </div>
        </div>
    );
};
