import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act, within } from '@testing-library/react';
import FindLanguage from './FindLanguage';
import * as React from "react";
import axios from "axios";

jest.mock("axios")

afterEach(() => {
  jest.clearAllMocks();
});

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

  test("input field clears when search button is pressed", async () => {
    const mockData = {
      data: [
      {language: "Ruby"},
      {language: "Javascript"},
      {language: "Javascript"}
      ]
    };
    axios.get.mockResolvedValueOnce(mockData);
    
    render(<FindLanguage />);
    const textField = screen.getByLabelText("user-input");
   
    act(() => {
      fireEvent.change(textField, { target: { value: "heykathl" } })
      fireEvent.click(screen.getByRole("button", {name: "Search" }))
    });

    await waitFor(() => {
      expect(textField).toHaveValue("");
     });
  })

  test('returns a language when a valid username is used to search', async () => {
    const mockData = {
      data: [
      {language: "Ruby"},
      {language: "Javascript"},
      {language: "Javascript"}
      ]
    };
    axios.get.mockResolvedValueOnce(mockData);

    render(<FindLanguage />);
    const textField = screen.getByLabelText("user-input");

    expect(axios.get).not.toHaveBeenCalled();

    act(() => {
      fireEvent.change(textField, { target: { value: "heykathl" } })
      fireEvent.click(screen.getByRole("button", {name: "Search" }))
    });

    expect(axios.get).toHaveBeenCalled();
    const response = await screen.findByText("heykathl's favourite programming language is Javascript!");
    expect(response).toBeInTheDocument();
    
  });

  test("returns error message when invalid username is used to search", async () => {
   
    const mockData = {
      data: [
        {login: "mojombo", language: "Ruby"},
        {login: "defunkt", language: "Javascript"},
        {login: "pjhyett", language: "Javascript"},
      ]
    };
    axios.get.mockResolvedValueOnce(mockData);

    render(<FindLanguage />);
    const textField = screen.getByLabelText("user-input");
    
    act(() => {
      fireEvent.change(textField, { target: { value: "heykathl" } })
      fireEvent.click(screen.getByRole("button", {name: "Search" }))
    });

    expect(axios.get).toHaveBeenCalled();
    const response = await within(screen.getByLabelText("response"));
    expect(response).not.toEqual("Javascript")
  })

  test("returns first language if there are more than one favourite language", async () => {
   
    const mockData = {
      data: [
        {language: "Ruby"},
        {language: "Ruby"},
        {language: "Javascript"},
        {language: "Javascript"}
      ]
    };
    axios.get.mockResolvedValueOnce(mockData);

    render(<FindLanguage />);
    const textField = screen.getByLabelText("user-input");
    
    act(() => {
      fireEvent.change(textField, { target: { value: "heykathl" } })
      fireEvent.click(screen.getByRole("button", {name: "Search" }))
    });

    expect(axios.get).toHaveBeenCalled();
    const response = await screen.findByText("heykathl's favourite programming language is Ruby!");
    expect(response).toBeInTheDocument();
  })

})
