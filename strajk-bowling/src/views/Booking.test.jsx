import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Booking from "./Booking";

import { it, describe, expect } from "vitest";

describe("Booking", () => {
  it("should navigate to main page on clicking [ Sweet, let's go! ] button", async () => {
    render(<Booking />);
    
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
      const shoeSizeInput = screen.getByRole("textbox");
      expect(shoeSizeInput).toBeInTheDocument();
      fireEvent.change(shoeSizeInput, { target: { value: "45" } });
    });

  const striiikeBtn = screen.getByTestId("striike-btn");
    fireEvent.click(striiikeBtn);

    await waitFor(() =>{
        const confirmationTitle = screen.getByText("See you soon!");
        expect(confirmationTitle).toBeInTheDocument();
        const sweetButton = screen.getByTestId("navigate-button");
        expect(sweetButton).toBeInTheDocument();
        fireEvent.click(sweetButton);
    })

    await waitFor(() => {
        const date = screen.getByLabelText(/Date/i);
       expect(date.value).toBe("");
    
        const time = screen.getByLabelText(/Time/i);
        expect(time.value).toBe("");
    
        const bowler = screen.getByLabelText(/Number of awesome bowlers/i);
        expect(bowler.value).toBe("");
    
        const lane = screen.getByLabelText(/Number of lanes/i);
        expect(lane.value).toBe("");
    
        const addShobutton = screen.getByText("+");
        expect(addShobutton).toBeInTheDocument();

        const striikeButton = screen.getByTestId("striike-btn");
         expect(striikeButton).toBeTruthy();
    });
  });
});
