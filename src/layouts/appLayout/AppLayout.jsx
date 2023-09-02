import {Navigate, Outlet} from 'react-router-dom';
import SideBar from '../../components/sideBar/SideBar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Applayout = () => {
    const isAuthenticated=!!localStorage.getItem("token");
         console.log(localStorage.getItem("token"))
    if(!isAuthenticated) return <Navigate to='/login'/>
  return (
    <div className="flex w-full min-h-screen">
      <ToastContainer />
      <SideBar />
      <div className="ml-[18%] flex w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Applayout;
