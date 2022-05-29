import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import FindLanguage from './Language';
import * as React from "react";
import axios from "axios";

describe("FindLanguage", () => {
  test('renders homepage with text field and search button', () => {
    render(<FindLanguage />)
    const username = screen.getByPlaceholderText("Enter Username")

    expect(username).toBeInDocument()
    const userInput = screen.getByLabelText("user-input")
    expect(userInput).toBeInDocument()

    const searchBtn = screen.getByRole("button", {name: "Search" })
    expect(searchBtn).toBeInDocument()
  });

})
