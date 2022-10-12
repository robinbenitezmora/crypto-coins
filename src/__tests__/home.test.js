import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Home from '../components/Home';

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
