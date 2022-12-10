import { test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../../src/pages/index";

test("titleが表示されていること", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Create T3 App/ })
  ).toBeDefined();
});
