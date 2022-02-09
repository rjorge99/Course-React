import { types } from "../types/types";
// const state = {
//     notes: [],
//     active: null,
//     active: {
//         id: "n3452345234",
//         title: "",
//         body: "",
//         geUrl: "",
//         date: 234234234234
//     }
// };
const initialState = {
    notes: [],
    active: null
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            };
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter((note) => note.id !== action.payload)
            };
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? action.payload.note : note
                )
            };
        case types.notesLogoutCleaning:
            return {
                active: null,
                notes: []
            };
        default:
            return state;
    }
};
