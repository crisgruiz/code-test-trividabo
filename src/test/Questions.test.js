import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ChoicesList from "../components/ChoicesList";

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

test("ChoicesList retrieves an array without choices", () => {
  expect(ChoicesList({ choices: [] })).toHaveLength(0);
});

test("ChoicesList retrieves an array with one choice", () => {
  expect(ChoicesList({ choices: [59] })).toHaveLength(1);
});

test("ChoicesList renders a list of choices", () => {
  act(() => {
    render(<ChoicesList saveUserAnswer={null} choices={[89]} />, container);
  });
  expect(container.textContent).toBe("89");
});
