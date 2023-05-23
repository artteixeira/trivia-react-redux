import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Feedback from '../pages/Feedback';

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
  const { history } = renderWithRouterAndRedux(<Feedback />, { initialState }, '/feedback');
  const { pathname } = history.location;
  expect(pathname).toBe('/feedback');
  userEvent.click(screen.getByRole('button', {  name: /play again/i}));
})
