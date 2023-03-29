export const disk = {
    google: 0,
    yandex: 1,
    onedrive: 2,
};

export const menu = {
    my: 0,
    recent: 1,
    trash: 2,
}

export const diskName = (diskId) => {
    return Object.keys(disk)[diskId];
};

export const menuName = (menuId) => {
    return Object.keys(menu)[menuId];
};
