import Swal from "sweetalert2";
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();

        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            })
            .finally((e) => {
                dispatch(finishLoading());
            });
    };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();

        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch(noteLogout());
        dispatch(logout());
    };
};

export const logout = () => {
    return {
        type: types.logout
    };
};
