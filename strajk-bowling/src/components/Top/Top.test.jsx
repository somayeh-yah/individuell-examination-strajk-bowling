import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Top from "./Top";

describe("Top", () => {
  it("should display the correct title", async () => {
    render(<Top title="Booking"/>);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
    const title = screen.getByText("Booking");
    expect(title.textContent).toBe("Booking");
   expect
  });
});
