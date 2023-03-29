import { URL_GOOGLE_FOLDERFILES, URL_GOOGLE_STORAGEQUOTA } from "./disks/googleDiskUrls";
import { URL_YANDEX_DISKFILES, URL_YANDEX_STORAGEQUOTA } from "./disks/yandexDiskUrls";

export const URL_ROOT = "http://localhost:7493/api"; // ROOT

export const URL_STORAGEQUOTA = [
    URL_GOOGLE_STORAGEQUOTA,
    URL_YANDEX_STORAGEQUOTA,
    null, // Onedrive
];

export const URL_DISKFILES = [
    URL_GOOGLE_FOLDERFILES,
    URL_YANDEX_DISKFILES,
    null, // Onedrive
]