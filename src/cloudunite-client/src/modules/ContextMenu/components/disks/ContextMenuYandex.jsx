import React, { useReducer, useState } from "react";
import { ContextMenuWrapper } from "../ContextMenuWrapper";
import { useAddNewFolderMutation } from "../../../../pages/DiskArea/store/api/diskYandexApi";
import { useCurrentUrl } from "../../../../hooks/useCurrentUrl";
import { DialogNewFolder } from "../../../Dialog/DialogNewFolder";

export const ContextMenuYandex = ({ children }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const [addNewFolder] = useAddNewFolderMutation();

    const currentUrl = useCurrentUrl();

    const funcNewFolder = async (newFolderName) => {
        console.log(
            "🚀 ~ file: ContextMenuYandex.jsx:30 ~ funcNewFolder ~ folderPath:",
            `/${currentUrl}/${newFolderName}`
        );

        try {
            await addNewFolder({
                folderPath: currentUrl
                    ? `/${currentUrl}/${newFolderName}`
                    : `/${newFolderName}`,
            });
        } catch (err) {
            console.error("Failed to create folder: ", err);
        }
    };

    const funcUploadFiles = (event) => {
        const file = event.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        //TODO:
    };

    return (
        <ContextMenuWrapper
            funcNewFolder={handleClickOpen}
            funcUploadFiles={funcUploadFiles}
        >
            {children}
            <DialogNewFolder
                open={openDialog}
                handleClose={handleClose}
                handleSubmit={funcNewFolder}
            />
        </ContextMenuWrapper>
    );
};
