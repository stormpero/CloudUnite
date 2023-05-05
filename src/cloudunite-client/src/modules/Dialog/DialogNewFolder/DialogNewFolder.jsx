import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
} from "@mui/material";
import React, { useState } from "react";

export const DialogNewFolder = ({ open, handleClose, handleSubmit }) => {
    const [folderName, setFolderName] = useState("");

    const onSumbit = () => {
        handleSubmit(folderName);
        setFolderName("");
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Укажите название папки</DialogTitle>
            <DialogContent>
                <TextField
                    value={folderName}
                    onChange={(event) => setFolderName(event.target.value)}
                    autoFocus
                    margin="dense"
                    label="Новая папка"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onSumbit}>Создать</Button>
            </DialogActions>
        </Dialog>
    );
};
