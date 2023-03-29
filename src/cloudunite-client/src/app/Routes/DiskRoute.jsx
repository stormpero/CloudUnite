import React from "react";
import { Route, Routes } from "react-router-dom";

export const DiskRoute = ({ myElement, recentElement, trashElement }) => {
    return (
        <Routes>
            <Route path="my/*" element={myElement} />
            <Route path="recent" element={recentElement} />
            <Route path="trash" element={trashElement} />
        </Routes>
    );
};
