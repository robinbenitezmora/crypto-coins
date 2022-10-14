import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import server from './mocks/server';
import App from './App';
import store from './redux/configureStore';

describe('The full App with routes is tested', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('testing the home route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('CRYPTO COINS CURRENT RANKING')).toBeInTheDocument();
  });

  it('testing the crypto route', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/crypto/bitcoin']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('Bitcoin')).toBeInTheDocument());
  });

  it('testing the crypto route with a wrong id', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/crypto/123']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('404')).toBeInTheDocument());
  });
});
