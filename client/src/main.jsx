import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx';
import Home from './pages/Home';
import Trails from './pages/Trails.jsx';
import Wildlife from './pages/Wildlife.jsx';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'Trails',
                element: <Trails />
            },
            {
                path: 'Wildlife',
                element: <Wildlife />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);