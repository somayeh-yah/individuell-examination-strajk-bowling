// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Booking from "./Booking";
// import { it, describe, beforeEach, vi, expect } from "vitest";

// describe("Booking", () => {

// ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
//     const addShoeButton = screen.getByRole("button", { name: /"+"/i });
//     const bookingButton = screen.getByText("strIIIIIike!");

//     fireEvent.change(date, { target: { value: "2024-05-27" } });
//     fireEvent.change(time, { target: { value: "12:00" } });
//     fireEvent.change(bowlers, { target: { value: "2" } });
//     fireEvent.change(lanes, { target: { value: "1" } });

//     fireEvent.click(addShoeButton);

//     const shoeFields = screen.getAllByRole("textbox");
//     fireEvent.change(shoeFields[0], { target: { value: "45" } });
//     fireEvent.change(shoeFields[1], { target: { value: "41" } });

//     fireEvent.click(bookingButton);

//     expect(fetchMock).toHaveBeenCalledWith(
//       'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com'
//     );

//     it("allows the user to choose shoe size for each player", async () => {
//       render(<Booking />);
  
//       const addShoeButton = screen.getByRole("button", { name: /"+"/i });
//       const bookingButton = screen.getByText("strIIIIIike!");
  
//       fireEvent.click(addShoeButton);
//       fireEvent.click(addShoeButton);
  
//       const shoeSizeInputs = screen.getAllByRole("textbox");
  
//       fireEvent.change(shoeSizeInputs[0], { target: { value: "45" } });
//       fireEvent.change(shoeSizeInputs[1], { target: { value: "41" } });
  
//       const date = screen.getByLabelText(/Date/i);
//       const time = screen.getByLabelText(/Time/i);
//       const bowlers = screen.getByLabelText(/Number of awesome bowlers/i);
//       const lanes = screen.getByLabelText(/Number of lanes/i);
  
//       fireEvent.change(date, { target: { value: "2024-05-27" } });
//       fireEvent.change(time, { target: { value: "12:00" } });
//       fireEvent.change(bowlers, { target: { value: "2" } });
//       fireEvent.change(lanes, { target: { value: "1" } });
  
//       fireEvent.click(bookingButton);
  
//       await waitFor(() => {
//         const confirmationSection = screen.getByRole("region", {
//           name: /confirmation/i,
//         }); // Adjust to your actual role and name
//         expect(confirmationSection).toBeInTheDocument();
//         expect(screen.getByText("Shoe sizes: 45, 41")).toBeInTheDocument();
//       });
//     });
//     it("should render an error if all the fields are not filled in", () => {
//       render(<Booking />);
//       fireEvent.click(screen.getByText("strIIIIIike!"));
//       expect(screen.getByText(/Please fill all fields/i)).toBeInTheDocument();
//     });
  
//     it("should render an error if numbers of shoes does not match the number of players", () => {
//       render(<Booking />);
//       fireEvent.change(screen.getByLabelText(/Number of awesome bowlers/i), {
//         target: { value: "2" },
//       });
//       fireEvent.click(screen.getByRole("button", { name: /Add Shoe/i }));
//       fireEvent.click(screen.getByText("strIIIIIike!"));
//       expect(
//         screen.getByText(/Number of shoes must match number of players/i)
//       ).toBeInTheDocument();
//     });
  
//     it("should render an error if numbers of players does not match the number of lanes", () => {
//       render(<Booking />);
//       fireEvent.change(screen.getByLabelText(/Number of awesome bowlers/i), {
//         target: { value: "5" },
//       });
//       fireEvent.change(screen.getByLabelText(/Number of lanes/i), {
//         target: { value: "1" },
//       });
//       fireEvent.click(screen.getByText("strIIIIIike!"));
//       expect(
//         screen.getByText(/Number of players exceeds the allowed per lane/i)
//       ).toBeInTheDocument();
//     });
//   });

