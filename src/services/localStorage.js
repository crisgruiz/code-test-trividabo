export const getJSON = (key, defaultData) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data === null ? defaultData : data;
};

export const setJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
