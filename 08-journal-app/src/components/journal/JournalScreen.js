import React from "react";
import { useSelector } from "react-redux";
import { NotesScreen } from "../notes/NotesScreen";
import { NothingSelected } from "./NothingSelected";
import { SideBar } from "./SideBar";

export const JournalScreen = () => {
    const { active } = useSelector((state) => state.notes);

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <SideBar />
            <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
        </div>
    );
};
