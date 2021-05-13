import {
  randomNum,
  getDataFromApi,
  generateAnswers,
} from "../services/getDataFromApi.js";

// test("the fetch success with 2", () => {
//   return getDataFromApi(2).then((data) => {
//     expect(data).toMatch(new RegExp(/^2 is /));
//   });
// });

// test("the fetch success without passing a number", () => {
//   return getDataFromApi().then((data) => {
//     expect(data).toMatch(new RegExp(/^\d+ is /));
//   });
// });

// test("the fetch function always retrieves a number as first word", () => {
//   return getDataFromApi().then((data) => {
//     expect(parseInt(data.split(" ")[0])).toBeLessThanOrEqual(99);
//   });
// });

test("the fetch function always retrieves a json", () => {
  return getDataFromApi(59).then((data) => {
    expect(data.number).toBe(59);
    expect(data.text).toMatch(new RegExp(/^59 is /));
  });
});

test("the fetch success without passing a number", () => {
  return getDataFromApi().then((data) => {
    expect(data.number).toBeLessThanOrEqual(99);
    expect(data.text).toMatch(new RegExp(/^\d+ is /));
  });
});

test("Generate answers returns an array with four options", () => {
  expect(generateAnswers(5)).toHaveLength(4);
  expect(generateAnswers(5)).toContain(5);
});

test("randomNum produces numbers between 0 and 99", () => {
  expect(randomNum()).toBeLessThanOrEqual(99);
});
