import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("page.tsx Component Tests", () => {
  it("should display the h1 header", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "To get started, edit the page.tsx file.",
      }),
    ).toBeDefined();
  });
});
