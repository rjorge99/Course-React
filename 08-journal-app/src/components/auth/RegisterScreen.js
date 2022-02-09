import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "Jorge",
        email: "jorge@gmail.com",
        password: "password",
        password2: "password"
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid())
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Invalid name"));
            return false;
        }
        if (!validator.isEmail(email)) {
            dispatch(setError("Invalid email"));
            return false;
        }
        if (password !== password2 || password.trim().length < 5) {
            dispatch(setError("Invalid password"));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onClick={handleRegister}>
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}

                <input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />
                <button
                    type="submit5"
                    className="btn btn-primary btn-block mb-5">
                    Register
                </button>
            </form>

            <Link className="link" to="/auth/login">
                Already Register?
            </Link>
        </>
    );
};
