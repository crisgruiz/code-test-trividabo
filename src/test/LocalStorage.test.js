test("should save to localStorage", () => {
  const KEY = "foo",
    VALUE = "bar";
  useDispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});
