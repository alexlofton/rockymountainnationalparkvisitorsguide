import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx';
import Home from './pages/Home';
import Trails from './pages/Trails.jsx';
import Wildlife from './pages/Wildlife.jsx';
import VisitorAmeneties from './components/Visitor-Amenities/VisitorAmenenties.jsx';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile.jsx';

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
            },
            {
                path: 'VisitorAmenities',
                element: <VisitorAmeneties />
            },
            {
                path: 'Profile',
                element: <Profile />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);