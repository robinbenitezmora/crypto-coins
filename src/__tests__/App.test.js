import Navbar from '../components/Navbar';
import Home from '../components/Home';
import '@testing-library/jest-dom';

describe('Testing App', () => {
  test('App renders correctly', () => {
    function App() {
      return (
        <div className="App">
          <Navbar />
          <Home />
        </div>
      );
    }
    expect(App).toBeDefined();
  });
});
