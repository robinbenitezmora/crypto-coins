import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';
import Crypto from '../components/Crypto';
import Home from '../components/Home';

describe('Testing components rendering properly', () => {
  test('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Navbar renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Crypto renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Crypto />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Home renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
