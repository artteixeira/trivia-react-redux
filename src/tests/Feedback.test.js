import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import Feedback from '../pages/Feedback';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

const initialState = {
  player: {
    gravatarEmail: 'alguem@alguem.com',
    name: 'Carlos',
    assertions: 3,
    score: 1000,
  }}

it('Testa se renderiza dois botões', () => {
  renderWithRouterAndRedux(<Feedback />, { initialState });
  const buttons = screen.queryAllByRole('button');
  expect(buttons.length).toBe(2);
});

it('Teste se ao clicar no botão Ranking é redirecionado para a página de ranking', () => {
  const { history } = renderWithRouterAndRedux(<App />, { initialState }, '/feedback');
  const { pathname } = history.location;
  expect(pathname).toBe('/feedback');

  
  screen.getByText(/could be better\.\.\./i);

  act(() => userEvent.click(screen.getByRole('button', {  name: /ranking/i})));
  expect(history.location.pathname).toBe('/ranking');
  
})
