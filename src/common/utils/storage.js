export const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStoredData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}