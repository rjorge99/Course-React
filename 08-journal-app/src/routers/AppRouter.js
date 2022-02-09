import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            } else setIsLoggedIn(false);

            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) return <h1>Wait...</h1>;

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <PublicRoute isAuth={isLoggedIn}>
                            <AuthRouter />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoute isAuth={isLoggedIn}>
                            <JournalScreen />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
