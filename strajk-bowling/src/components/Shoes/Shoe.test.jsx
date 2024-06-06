import { describe, expect } from "vitest";
import Shoes from "./Shoes";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Shoes", () => {
  
   
 
  it("allows the user to choose shoe size for each player", async () => {

    render(
      <Shoes
        updateSize={() => {}}
        addShoe={() => {}}
        removeShoe={() => {}}
        shoes={[
          { id: "player1", value: "" },
          { id: "player2", value: "" },
        ]}
      />
    );
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

    render(
      <Shoes
        updateSize={() => {}}
        addShoe={() => {}}
        removeShoe={() => {}}
        shoes={[]}
      />
    );
    await waitFor(() => async () => {
      const addbutton = screen.getAllByText("+");
      fireEvent.change(addbutton);
        

        const removeButton = screen.getByTestId("remove-player-button");
        fireEvent.click(removeButton[removeButton.length - 1]);
        await waitFor(() =>{
        expect(removeButton).toBeFalsy();
        expect(removeButton).not.toBeInTheDocument();


        })
        
      
    });
  });
});
