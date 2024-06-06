import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render my booking reference-number", async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const date = screen.getByLabelText(/Date/i);
    fireEvent.change(date, {
      target: { value: currentDate },
    });

    const time = screen.getByLabelText(/Time/i);
    fireEvent.change(time, {
      target: { value: "12:00" },
    });

    const bowler = screen.getByLabelText(/Number of awesome bowlers/i);
    fireEvent.change(bowler, {
      target: { value: "1" },
    });

    const lane = screen.getByLabelText(/Number of lanes/i);
    fireEvent.change(lane, {
      target: { value: "1" },
    });

    const addShobutton = screen.getByText("+");
    fireEvent.click(addShobutton);

    await waitFor(() => {
      const shoeSizeInput = screen.getAllByTestId("bowlers")[0];
      fireEvent.change(shoeSizeInput, { target: { value: "10" } });
    });

    const striiikeBtn = screen.getByTestId("striike-btn");
    fireEvent.click(striiikeBtn);

    await waitFor(() => {
      const bookingNumber = screen.getByDisplayValue("STR102YZMR");
      expect(bookingNumber.textContent).toBe("STR102YZMR");
    });
  });

  it("should navigate to main page on clicking [ Sweet, let's go! ] button", async () => {
    const striiikeBtn = screen.getByTestId("striike-btn");
    fireEvent.click(striiikeBtn);

    await waitFor(() => {
      const bookingNumber = screen.getAllByRole("button");
      expect(bookingNumber).toBeInTheDocument();
      expect(bookingNumber.textContent).toBe("STR1428UBDZ");
    });

    const navigationBtn = screen.getByDisplayValue("Sweet, let's go!");
    expect(navigationBtn).toBeInTheDocument();
    fireEvent.click(navigationBtn);

    await waitFor(() => {
      const date = screen.getByLabelText(/Date/i);
      const time = screen.getByLabelText(/Time/i);
      const bowler = screen.getByLabelText(/Number of awesome bowlers/i);
      const lane = screen.getByLabelText(/Number of lanes/i);

      expect(date).toBeInTheDocument();
      expect(date.value).toBe("");
      expect(time).toBeInTheDocument();
      expect(time.value).toBe("");
      expect(bowler).toBeInTheDocument();
      expect(bowler.value).toBe("");
      expect(lane).toBeInTheDocument();
      expect(lane.value).toBe("");
    });
  });
});
