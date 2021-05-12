import { render, screen } from "@testing-library/react";
import getDataFromApi from "../services/getDataFromApi";

test("the fetch success", () => {
  //   render(<getDataFromApi />);
  return getDataFromApi(2).then((data) => {
    expect(data).toBe(
      "2 is the price in cents per acre the USA bought Alaska from Russia"
    );
  });
});

test("the fetch fails with an error", () => {
  //   render(<getDataFromApi />);
  return getDataFromApi(2).then((data) => {
    expect(data).toBe(
      "2 is the price in cents per acre the USA bought Alaska from Russia"
    );
  });
});
