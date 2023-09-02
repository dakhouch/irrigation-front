import { Avatar } from 'antd';
import { Popover } from 'antd';
import SignoutIcon from '../../assets/icons/SignoutIcon';
import LockIcon from '../../assets/icons/LockIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const userActions = (navigate) => {
  const signOut=()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div className="flex justify-start text-gray-800 flex-col">
      <div className="flex flex-row space-x-2 items-center hover:bg-bgOrange h-fit p-2 rounded-sm">
        <div className="text-primary">
          <SignoutIcon />
        </div>
        <button
          onClick={() => signOut()}
          className="font-medium lg:text-sm text-[10px]"
        >
          Se Déconnecter
        </button>
      </div>
      <div className="flex flex-row space-x-2 items-center hover:bg-bgOrange h-fit p-2 rounded-sm">
        <div className="text-primary">
          <LockIcon />
        </div>
        <button className="font-medium lg:text-sm text-[10px]">
          Modifier le mot de passe
        </button>
      </div>
    </div>
  );
};
const SideBarFooter = () => {
  const [user] = useState(localStorage.getItem("username"));
  const navigate=useNavigate();

  const getFirstLetter = () => user.charAt(0).toLocaleUpperCase();

  useEffect(() => {
  }, []);

  return (
    <div className="bottom-5 w-full pr-8 left-3 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-3">
        <Avatar
          className="inline-flex bg-primary items-center justify-center lg:w-12 lg:h-12 h-9 w-9"
        >
          <span className="font-medium lg:text-xl text-sm">
            {getFirstLetter()}
          </span>
        </Avatar>
        <p className="font-medium text-gray-800  text-xs lg:text-xl">{user}</p>
      </div>
      <Popover placement="topRight" content={userActions(navigate)} trigger="click">
        <button
          className="cursor-pointer text-gray-800 focus:text-primary focus:bg-bgOrange hover:text-primary
         hover:bg-bgOrange rounded-full p-1.5"
        >
          <MenuIcon />
        </button>
      </Popover>
    </div>
  );
};

export default SideBarFooter;
