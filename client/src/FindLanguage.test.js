import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import FindLanguage, { handleApiSearch } from './FindLanguage';

import * as React from "react";
import axios from "axios";

jest.mock("axios")

describe("FindLanguage", () => {
  test('renders homepage with text field and search button', () => {
    render(<FindLanguage />);
    
    const text = screen.getByText("Find out a user's favourite programming language!");
    expect(text).toBeInTheDocument();

    const textField = screen.getByLabelText("user-input");
    expect(textField).toBeInTheDocument();

    const searchBtn = screen.getByRole("button", {name: "Search" });
    expect(searchBtn).toBeInTheDocument();
  });

  

})
