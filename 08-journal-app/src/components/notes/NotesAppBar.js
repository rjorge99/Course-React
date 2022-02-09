import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    };

    const handlePictureClick = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (file)
            dispatch(startUploading(file));
    };

    return (
        <div className="notes__appbar">
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            <span>28 de agosto de 2020</span>
            <div>
                <button onClick={handlePictureClick} className="btn">
                    Picture
                </button>
                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};
