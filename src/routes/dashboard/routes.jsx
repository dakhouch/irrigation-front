import {DASHBOARD_BASE_URL} from "./path.jsx";
import {DashboardOutlined} from "@ant-design/icons";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";


export const DASHBOARD_ROUTES = {
    path: DASHBOARD_BASE_URL,
    name: 'dashboard',
    element:  <Dashboard/>
};
export const DASHBOARD_NAVLINKS = {
    link: DASHBOARD_BASE_URL,
    label: 'Dashboard',
    icon: <DashboardOutlined />,
    subLinks:[]
}