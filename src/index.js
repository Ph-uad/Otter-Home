import { createRoot } from 'react-dom/client';
import './index.css';
import App from './container/App'
import { Provider } from 'react-redux';
import store from './data/ApartmentData';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App tab="home" />
        </Provider>
    </BrowserRouter>

);
