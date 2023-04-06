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

    const [addNewFolder, result] = useAddNewFolderMutation();
    console.log("🚀 ~ file: ContextMenuYandex.jsx:19 ~ ContextMenuYandex ~ result:", result)
    
    const currentUrl = useCurrentUrl();

    const funcNewFolder = async (newFolderName) => {
        try {
            await addNewFolder({
                folderPath: `/${currentUrl}/${newFolderName}`,
            });
        } catch (err) {
            console.error("Failed to create folder: ", err);
        }
    };

    const funcUploadFiles = () => {};

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
