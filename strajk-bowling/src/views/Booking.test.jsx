import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Booking from "./Booking";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

import { it, describe, expect, beforeEach } from "vitest";

describe("Booking", () => {
  beforeEach(() => {
    render(<Booking />);
  });
  it("should navigate to main page on clicking [ Sweet, let's go! ] button", async () => {
    // render(<Booking />);

    const currentDate = new Date().toISOString().split("T")[0];
    const date = screen.getByLabelText(/Date/i);
    fireEvent.change(date, {
      target: { value: currentDate },
    });

    const time = screen.getByLabelText(/Time/i);
    fireEvent.change(time, {
      target: { value: "12:00" },
    });

    const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
    fireEvent.change(bowlers, {
      target: { value: "1" },
    });

    const lanes = screen.getByLabelText(/Number of lanes/i);
    fireEvent.change(lanes, {
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

    await waitFor(() => {
      const confirmationTitle = screen.getByText("See you soon!");
      expect(confirmationTitle).toBeInTheDocument();
      const sweetButton = screen.getByTestId("navigate-button");
      expect(sweetButton).toBeInTheDocument();
      fireEvent.click(sweetButton);
    });

    await waitFor(() => {
      const date = screen.getByLabelText(/Date/i);
      expect(date.value).toBe("");

      const time = screen.getByLabelText(/Time/i);
      expect(time.value).toBe("");

      const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
      expect(bowlers.value).toBe("");

      const lanes = screen.getByLabelText(/Number of lanes/i);
      expect(lanes.value).toBe("");

      const addShobutton = screen.getByText("+");
      expect(addShobutton).toBeInTheDocument();

      const striikeButton = screen.getByTestId("striike-btn");
      expect(striikeButton).toBeTruthy();
    });
  });

  it("should give an error message if I missed fill in one or two filds", async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const date = screen.getByLabelText(/Date/i);
    const time = screen.getByLabelText(/Time/i);
    const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
    const lanes = screen.getByLabelText(/Number of lanes/i);
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(bowlers).toBeInTheDocument();
    expect(lanes).toBeInTheDocument();

    fireEvent.change(date, { target: { value: currentDate } });
    fireEvent.change(time, { target: { value: "" } });
    fireEvent.change(bowlers, { target: { value: "1" } });
    fireEvent.change(lanes, { target: { value: "1" } });

    const addShobutton = screen.getByText("+");
    fireEvent.click(addShobutton);

    await waitFor(() => {
      const shoeSizeInput = screen.getByRole("textbox");
      expect(shoeSizeInput).toBeInTheDocument();
      fireEvent.change(shoeSizeInput, { target: { value: "45" } });
     
    });

    const striikeButton = screen.getByTestId("striike-btn");
    fireEvent.click(striikeButton);

    await waitFor(() => {
      const errorMessage = screen.getByTestId("err-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toBeTruthy();
    });
  });
});
