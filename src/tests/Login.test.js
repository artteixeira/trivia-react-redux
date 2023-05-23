import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import App from "../App";
import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testa a página de Login", () => {
  test("Testa se os elementos da página de login são carregados", () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ["/"],
    });

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
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ["/"],
    });

    const configButton = screen.getByRole("button", { name: /configurações/i });

    userEvent.click(configButton);
    screen.getByRole("heading", { name: /configurações/i });
    expect(history.location.pathname).toBe('/settings');
  });
  test("Testa se ao clicar em play é direcionado para a página game", () => {
    const { history } = renderWithRouterAndRedux(<App />, 'teste@teste.com', {
      initialEntries: ["/"],
    });

    const emailInput = screen.getByTestId("input-gravatar-email");
    const nameinput = screen.getByTestId("input-player-name");
    const playButton = screen.getByRole("button", { name: /play/i });

    expect(emailInput).toBeInTheDocument();
    expect(nameinput).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(nameinput, 'Teste');
    userEvent.click(playButton);

    history.push('/game')

    expect(history.location.pathname).toBe('/game')
    console.log(localStorage.getItem('token'));

  });
});
