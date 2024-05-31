import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render my booking reference-number", async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const when = screen.getByTestId("date");
    fireEvent.change(when, {
      target: { value: currentDate },
    });

    const time = screen.getByTestId("time");
    const selectedtime = "12:00";
    fireEvent.change(time, {
      target: { value: selectedtime },
    });

    const bowler = screen.getByTestId("bowlers");
    fireEvent.change(bowler, {
      target: { value: "1" },
    });

    const lane = screen.getByTestId("lanes");
    fireEvent.change(lane, {
      target: { value: "1" },
    });

    const addShobutton = screen.getByTestId("add-button");
    fireEvent.click(addShobutton);

    await waitFor(() => {
      const input = screen.getByTestId("players");
      fireEvent.change(input, {
        target: { value: "10" },
      });
    });
    const striiikeBtn = screen.getByTestId("striike-btn");
    fireEvent.click(striiikeBtn);
    await waitFor(() => {
      expect(screen.getByTestId("booking-num").value).toBe("STR1428UBDZ");
    });
  });


  it("should navigate to main page after order confirmation", async() => {
      const currentDate = new Date().toISOString().split("T")[0];
      const time = screen.getByTestId("time");
      fireEvent.change(time, {
        target: { value: currentDate },
      });

    });
});
