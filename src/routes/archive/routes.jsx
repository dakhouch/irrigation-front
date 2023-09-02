import {DashboardOutlined, DatabaseOutlined} from "@ant-design/icons";
import {ARCHIVE_BASE_URL, ARCHIVE_PUIT_BASE_PATH, ARCHIVE_WITH_BASE} from "./path.jsx";
import PuitFilterCard from "../../components/filterCards/PuitFilterCard.jsx";
import PuitListPage from "../../pages/archive/PuitListPage.jsx";


export const ARCHIVE_ROUTES = {
    path: ARCHIVE_BASE_URL,
    name: 'archive',
    children: [],
};
export const ARCHIVE_PUIT_ROUTES = {
    path: ARCHIVE_PUIT_BASE_PATH,
    name: 'archive-puit',
    children: [
        {
            path:"",
            element: <PuitListPage/>,
        },
    ],
};
export const ARCHIVE_NAVLINKS = {
    link: ARCHIVE_WITH_BASE,
    label: 'Archive',
    icon: <DatabaseOutlined/>,
    subLinks:[
        {
            link: ARCHIVE_PUIT_BASE_PATH,
            label: 'archive des puits',
            icon: <DatabaseOutlined/>,
        }
    ]
}