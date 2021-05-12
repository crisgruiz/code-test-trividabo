import { randomNum, getDataFromApi } from "../services/getDataFromApi.js";

test("the fetch success with 2", () => {
  return getDataFromApi(2).then((data) => {
    expect(data).toMatch(new RegExp(/^2 is /));
  });
});

test("the fetch success without passing a number", () => {
  return getDataFromApi().then((data) => {
    expect(data).toMatch(new RegExp(/^\d+ is /));
  });
});

test("the fetch function always retrieves a number as first word", () => {
  return getDataFromApi().then((data) => {
    expect(parseInt(data.split(" ")[0])).toBeLessThanOrEqual(99);
  });
});

test("randomNum produces numbers between 0 and 99", () => {
  expect(randomNum()).toBeLessThanOrEqual(99);
});
