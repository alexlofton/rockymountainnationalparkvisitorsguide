import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Trails from './pages/Trails.jsx';
import App from './App.jsx';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <NotFound />,
        children: [
            // UNCOMMENT THIS WHEN HOME IS MADE AND REFACTOR TRAIL TO GO WHEN PATH IS '/TRAILS'
            // {
            //     index: true,
            //     element: <Home />
            // }
            // REFACTOR ONCE ROUTES ARE SETUP
            // {
            //     index: true,
            //     element: <Trails />
            // }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);