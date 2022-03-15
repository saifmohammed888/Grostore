import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import Navbar from './navbar';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
});

test('Render Navbar and Nav link', () => {
  expect(screen.getByAltText('logo')).toBeInTheDocument();
  expect(screen.getByText('HOME')).toBeInTheDocument();
  expect(screen.getByText('CATEGORIES')).toBeInTheDocument();
  expect(screen.getByText('OFFERS')).toBeInTheDocument();
  expect(screen.getByText('CART')).toBeInTheDocument();
});
