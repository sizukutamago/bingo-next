import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";

test("buttonが表示されていること", () => {
  render(<Home />);
  screen.debug();
  expect(screen.getByText(/ビンゴを始める/)).toBeDefined();
});
