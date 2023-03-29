import React from "react";
import { DiskRoute } from "../DiskRoute";

export const YandexDiskRoute = () => {
    return (
        <DiskRoute
            myElement={<h1> Yandex myElement </h1>}
            recentElement={<h1> Yandex recentElement </h1>}
            trashElement={<h1> Yandex trashElement </h1>}
        />
    );
};
