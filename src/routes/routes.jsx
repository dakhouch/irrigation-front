import { createBrowserRouter, Navigate } from 'react-router-dom';
import Applayout from '../layouts/appLayout/AppLayout';
import LoginPage from "../pages/login/Login.jsx";
import {DASHBOARD_ROUTES} from "./dashboard/routes.jsx";
import {ARCHIVE_PUIT_ROUTES, ARCHIVE_ROUTES} from "./archive/routes.jsx";

export const router = createBrowserRouter([
    {
        element: <Applayout />,
        children: [
            DASHBOARD_ROUTES,
            ARCHIVE_ROUTES,
            ARCHIVE_PUIT_ROUTES,
        ],
    },
    {
        element: <LoginPage />,
        children: [
            {
                path: '/login',
                element: <Navigate to={ + '/login'} />,
            },

        ],
    },
]);