const setLocal = (data) => {
  localStorage.setItem("questions", JSON.stringify(data));
};
const getLocal = () => {
  return JSON.parse(localStorage.getItem("questions"));
};

export { setLocal, getLocal };
