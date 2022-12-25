import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";

describe("トップページ", () => {
  test("buttonが表示されていること", () => {
    render(<Home />);
    expect(screen.getByText(/ビンゴを始める/)).toBeDefined();
  });
});
