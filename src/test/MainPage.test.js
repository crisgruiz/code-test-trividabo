import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import * as getData from "../services/getDataFromApi";
import { act } from "react-dom/test-utils";
import MainPage from "../components/MainPage";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeQuestion = {
    text: "How old are you?",
    number: "32",
    choices: [38, 39, 32, 5],
  };
  jest
    .spyOn(getData, "generateQuestionWithAnswers")
    .mockImplementation(() => Promise.resolve(Promise.resolve(fakeQuestion)));

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<MainPage />, container);
  });

  expect(container.querySelector(".question__text").textContent).toContain(
    fakeQuestion.text
  );
  expect(container.querySelectorAll(".answersList__answer")).toHaveLength(4);
  getData.generateQuestionWithAnswers.mockRestore();
});

it("renders user data", async () => {
  jest
    .spyOn(getData, "generateQuestionWithAnswers")
    .mockImplementation(() => Promise.resolve(Promise.resolve({})));

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<MainPage />, container);
  });

  expect(container.textContent).toContain("SORRY THERE ARE NO QUESTIONS");
  getData.generateQuestionWithAnswers.mockRestore();
});
