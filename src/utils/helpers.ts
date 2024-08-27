export const getArrayFromLocalStorage = (itemName: string) => {
    if (!itemName) return null;
    const values = localStorage.getItem(itemName);
    if (!values) return undefined;
    return JSON.parse(values);
};