import React from "react";
import App from "../src/App";

import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("<App/>", () => {
  // test("should render", () => {
  //   render(<App />);
  //   screen.debug();
  //   expect(screen.getByText("React tecnic interview")).toBeDefined();
  // });

  test("should add a new item and remove the item", async () => {
    const user = userEvent.setup();
    render(<App />);

    // User serach for the input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // User shearch for the form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // User check the button
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // User type in the input
    // User click the button
    const ramdomText = crypto.randomUUID();
    await user.type(input, ramdomText);
    await user.click(button!);

    // User check the list
    const list = screen.getByRole("list");
    expect(list).toBeDefined();

    // Check the list has one item
    expect(list.childNodes.length).toBe(1);

    // Check the item has a remove button
    const item = screen.getByText(ramdomText);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();

    // User click the remove button
    await user.click(removeButton!);
    screen.debug();

    // Check the list is empty
    const emptyList = screen.getByText("Empty list");
    expect(emptyList).toBeDefined();
    //expect(list.childNodes.length).toBe(0);
  });
});
