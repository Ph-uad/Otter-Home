import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/container/App'
import { Provider } from 'react-redux';
import store from './data/ApartmentData';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}> <App tab="home" /> </Provider>);
