import {
  randomNum,
  getDataFromApi,
  generateAnswers,
  generateQuestion,
  generateQuestionWithAnswers,
} from "../services/getDataFromApi.js";

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

test("Generate question with answers", () => {
  generateQuestionWithAnswers().then((qa) => {
    expect(qa).toHaveLength(3);
    expect(qa).toContain("text");
    expect(qa).toContain("number");
    expect(qa).toContain("choices");
  });
});

test("Given a quaetion return number and qestion", () => {
  const q = generateQuestion("22 is the number of the day I was born.");
  expect(q).toBe("What is the number of the day I was born?");
});

test("randomNum produces numbers between 0 and 99", () => {
  expect(randomNum()).toBeLessThanOrEqual(99);
});
