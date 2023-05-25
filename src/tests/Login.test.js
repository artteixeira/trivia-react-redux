import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import App from "../App";
import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Testa a página de Login", () => {
  test("Testa se os elementos da página de login são carregados", () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId("input-gravatar-email");
    const nameinput = screen.getByTestId("input-player-name");
    const playButton = screen.getByRole("button", { name: /play/i });
    const configButton = screen.getByRole("button", { name: /configurações/i });

    expect(emailInput).toBeInTheDocument();
    expect(nameinput).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(configButton).toBeInTheDocument();

    userEvent.click(configButton);
    screen.getByRole("heading", { name: /configurações/i });
    expect(history.location.pathname).toBe('/settings');
  });
  test("Testa o comportamento do botão settings", () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const configButton = screen.getByRole("button", { name: /configurações/i });

    userEvent.click(configButton);
    screen.getByRole("heading", { name: /configurações/i });
    expect(history.location.pathname).toBe('/settings');
  });
  test("Testa se ao clicar em play é direcionado para a página game", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId("input-gravatar-email");
    userEvent.type(emailInput, 'teste@teste.com')
    const nameinput = screen.getByTestId("input-player-name");
    userEvent.type(nameinput, 'Teste');
    const playButton = screen.getByRole("button", { name: /play/i });
    userEvent.click(playButton);

    expect(emailInput).toBeInTheDocument();
    expect(nameinput).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(nameinput, 'Teste');
    act(() => userEvent.click(playButton));
    jest.spyOn(global, 'fetch');
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(history.location.pathname).toBe('/game');
    })
  });
});
