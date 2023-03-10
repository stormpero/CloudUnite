export const diskSpacePercent = (used, all) => (used * 100) / all;
export const bytesToGB = (bytes) => {
    if (bytes === 0) return "0 ГБ"; // если количество байт равно 0, то возвращаем 0 ГБ
    const GB = 1024 * 1024 * 1024; // количество байт в одном гигабайте
    const result = bytes / GB; // вычисляем количество гигабайт
    if (Number.isInteger(result)) {
        // если число целое, то не выводим дробную часть
        return `${result} ГБ`;
    } else {
        // иначе выводим с округлением до 2 знаков после запятой
        return `${result.toFixed(2)} ГБ`;
    }
};
