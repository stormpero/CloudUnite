import { URL_GOOGLE_STORAGEQUOTA } from "./disks/googleDiskUrls";
import { URL_YANDEX_STORAGEQUOTA } from "./disks/yandexDiskUrls";

export const URL_ROOT = "http://localhost:7493/api"; // ROOT

export const URL_STORAGEQUOTA = [
    URL_GOOGLE_STORAGEQUOTA,
    URL_YANDEX_STORAGEQUOTA,
    null, // TODO: Onedrive
];
