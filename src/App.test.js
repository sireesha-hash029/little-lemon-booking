import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking page heading", () => {
  render(<App />);

  expect(
    screen.getByText(/Book a Table/i)
  ).toBeInTheDocument();
});

test("renders guests label", () => {
  render(<App />);

  expect(
    screen.getByText(/Guests/i)
  ).toBeInTheDocument();
});