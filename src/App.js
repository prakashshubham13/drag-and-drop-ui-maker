import './App.css';
import Dashboard from './Dashboard';
import MyRouter from './routes/Route';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { Header } from './Page/Header';
function App() {
  return (
    <Provider store={store}>
    <MyRouter/>
    </Provider>
  );
}

export default App;
