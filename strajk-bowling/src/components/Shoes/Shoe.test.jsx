import { describe, expect } from "vitest";
import Shoes from "./Shoes";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Shoes", () => {

  beforeEach(() => {
    render(
      <Shoes
        updateSize={() => {}}
        addShoe={() => {}}
        removeShoe={() => {}}
        shoes={[
          { id: "player1", value:"" },
          { id: "player2", value: "" },
        ]}
      />
    );

  });
  it("allows the user to choose shoe size for each player", async () => {
  
    const addbutton = screen.getByText("+");
    fireEvent.change(addbutton);
    await waitFor(() => {
      const shoeSizeInputs = screen.getAllByRole("textbox");
    

      fireEvent.change(shoeSizeInputs[0], { target: { value: "45" } });

      
    fireEvent.change(shoeSizeInputs[1], { target: { value: "41" } });
      
    expect(addbutton).toBeTruthy();
      expect(shoeSizeInputs[0].value).toBe("45");
      expect(shoeSizeInputs[1].value).toBe("41");
      expect(shoeSizeInputs).toHaveLength(2);
    });
  });


  it("allows the user to remove shoe-field if user accidentally clicked too many time one add button", async () => {
 

    await waitFor(() => {
      const shoeSizeInputs = screen.getAllByRole("textbox");
    

      fireEvent.change(shoeSizeInputs[0], { target: { value: "45" } });
      fireEvent.change(shoeSizeInputs[1], { target: { value: "41" } });

      expect(shoeSizeInputs[0].value).toBe("45");
      expect(shoeSizeInputs[1].value).toBe("41");
      expect(shoeSizeInputs).toHaveLength(2);
      
      

    });
  });

  
  it("remove button removes shoe size input field", async () => {
    const addButton = screen.getByText("+");
    fireEvent.click(addButton);

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);
    await waitFor(() => {
      expect(screen.queryByTestId("players")).not.toBeInTheDocument();
    });
  });
});


  

