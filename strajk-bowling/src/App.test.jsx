import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import Booking from "./views/Booking";

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

  it("should navigate to main page on clicking [ Sweet, let's go! ] button", async () => {
    const currantDate = new Date().toISOString().split("T")[0];
    const date = screen.getByLabelText(/Date/i);
    const time = screen.getByLabelText(/Time/i);
    const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
    const lanes = screen.getByLabelText(/Number of lanes/i);

    fireEvent.change(date, { target: { value: currantDate } });
    fireEvent.change(time, { target: { value: "12:00" } });
    fireEvent.change(bowlers, { target: { value: "2" } });
    fireEvent.change(lanes, { target: { value: "1" } });

    const addButton = screen.getByText("+");
    fireEvent.click(addButton);
    

    await waitFor(() => {
      const shoeSizeInputs = screen.getAllByRole("textbox");

      fireEvent.change(shoeSizeInputs[0], { target: { value: "45" } });
      
      fireEvent.click(addButton);
      fireEvent.change(shoeSizeInputs[1], { target: { value: "41" } });
    });

    const striiikeBtn = screen.getByTestId("striike-btn");
    expect(striiikeBtn).toBeInTheDocument;
    fireEvent.click(striiikeBtn);

    await waitFor(() => {
      const sweetButton = screen
        .getByText("Sweet, let's go!")
        .find((button) => button.textContent === "Sweet, let's go!");
      expect(sweetButton).toBeInTheDocument;
      fireEvent.click(sweetButton);
     
    });

    await waitFor(() => {
      expect(render(<Booking/>)).toBeTruthy();
      const date = screen.getByLabelText(/Date/i);
      const time = screen.getByLabelText(/Time/i);
      const bowler = screen.getByLabelText(/Number of awesome bowlers/i);
      const lane = screen.getByLabelText(/Number of lanes/i);

      const addButton = screen.getByText("+");
       
      expect(addButton).toBeInTheDocument();
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
