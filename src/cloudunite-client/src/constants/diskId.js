export const disk = {
    google: 0,
    yandex: 1,
    onedrive: 2,
};

export const diskName = (diskId) => {
    return Object.keys(disk)[diskId];
};
