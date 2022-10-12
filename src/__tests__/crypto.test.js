import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Crypto from '../components/Crypto';

test('Crypto renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Crypto />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
