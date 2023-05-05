import {
    Avatar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useReducer, useState } from "react";
import { Loading } from "../../../UI/Loading";

const drawerWidth = 300;

export const FriendsDrawer = ({ open }) => {
    const [isSearch, setIsSearch] = useReducer((state) => !state, false);
    const [isSearchComplete, setIsSearchComplete] = useReducer(
        (state) => !state,
        false
    );
    const [searchField, setSearchField] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const handleKeyPress = (event) => {
        if (event.key === "Enter" && searchField.includes("andrey")) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsSearchComplete();
            }, 700);
        }
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <Toolbar />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "20px",
                    m: 2,
                }}
            >
                {isSearch ? (
                    <Input
                        placeholder="Добавить"
                        onChange={(event) => {
                            setSearchField(event.target.value);
                        }}
                        onKeyDown={handleKeyPress}
                        value={searchField}
                    />
                ) : (
                    <Typography variant="h6" fontSize="18px">
                        Список друзей
                    </Typography>
                )}

                <Box>
                    {isSearch ? (
                        <IconButton edge="end" onClick={setIsSearch}>
                            <CloseIcon />
                        </IconButton>
                    ) : (
                        <IconButton edge="end" onClick={setIsSearch}>
                            <AddIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Divider />
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                {isSearch ? (
                    isLoading ? (
                        <Loading />
                    ) : isSearchComplete ? (
                        usersListSearch.map((el) => (
                            <>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={el.avatar}>
                                            {el.letters}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={el.name}
                                        secondary={el.email}
                                    />
                                    <IconButton
                                        edge="end"
                                        onClick={setIsSearch}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </ListItem>
                                <Divider />
                            </>
                        ))
                    ) : null
                ) : (
                    usersList.map((el) => (
                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={el.avatar}>
                                        {el.letters}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={el.name}
                                    secondary={el.email}
                                />
                            </ListItem>
                            <Divider />
                        </>
                    ))
                )}
            </List>
        </Drawer>
    );
};

const usersList = [
    {
        avatar: "https://a-static.besthdwallpaper.com/river-landscape-wallpaper-7680x4320-81127_56.jpg",
        name: "Павел Калдярв",
        letters: "ПК",
        email: "pavel11993@gmail.com",
    },
    {
        avatar: "https://krot.info/uploads/posts/2021-12/1638638817_14-krot-info-p-peizazh-na-avu-krasivie-foto-15.jpg",
        name: "Иван Лунин",
        letters: "ИЛ",
        email: "ivan3264@gmail.com",
    },
    {
        avatar: "https://u7.uidownload.com/vector/136/424/vector-man-vector-avatar-ai.jpg",
        name: "Антон Паулкин",
        letters: "АП",
        email: "anton64@gmail.com",
    },
];

const usersListSearch = [
    {
        avatar: "https://a-static.besthdwallpaper.com/river-landscape-wallpaper-7680x4320-81127_56.jpg",
        name: "Андрей Линов",
        letters: "АЛ",
        email: "andrey2313@gmail.com",
    },
    {
        avatar: "https://krot.info/uploads/posts/2021-12/1638638817_14-krot-info-p-peizazh-na-avu-krasivie-foto-15.jpg",
        name: "Андрей Вилов",
        letters: "АВ",
        email: "andreyvil@gmail.com",
    },
    {
        avatar: "https://u7.uidownload.com/vector/136/424/vector-man-vector-avatar-ai.jpg",
        name: "Андрей Ламов",
        letters: "АЛ",
        email: "andreylamov@gmail.com",
    },
];

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}));
