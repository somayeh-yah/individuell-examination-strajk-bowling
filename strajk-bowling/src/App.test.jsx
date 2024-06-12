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
      const shoeSizeInput = screen.getByTestId("Shoe size / person 1");
      fireEvent.change(shoeSizeInput, { target: { value: "10" } });
    });

    const striiikeBtn = screen.getByTestId("striike-btn");
    fireEvent.click(striiikeBtn);

    await waitFor(() => {
      //screen.debug()
      const bookingNumber = screen.getByDisplayValue("STR7032TPJH");
      expect(bookingNumber.value).toBe("STR7032TPJH");
    });
  });


});
