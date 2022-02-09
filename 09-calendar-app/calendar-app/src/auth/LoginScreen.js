import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../actions/auth";
import { useForm } from "../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        // lEmail: "jorge@hotmail.com",
        // lPassword: "123456"
        lEmail: "",
        lPassword: ""
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: "",
        rEmail: "",
        rPassword: "",
        rPassword2: ""
    });

    const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;
    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword !== rPassword2)
            return Swal.fire(
                "Error",
                "Las contrasenas deben de ser iguales",
                "error"
            );

        dispatch(startRegister(rEmail, rPassword, rName));
    };

    return (
        <div className="container login-main-container">
            <div className="login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={lPassword}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="rName"
                                    value={rName}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="rEmail"
                                    value={rEmail}
                                    onChange={handleRegisterInputChange}
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="rPassword"
                                    value={rPassword}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    name="rPassword2"
                                    value={rPassword2}
                                    onChange={handleRegisterInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    onClick={handleRegister}
                                    type="submit"
                                    className="btnSubmit"
                                    value="Crear cuenta"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
