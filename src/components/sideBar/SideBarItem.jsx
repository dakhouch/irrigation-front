import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const SideBarItem = ({ path, title, icon }) => {
  const { pathname } = useLocation();
  return (
    <li className="">
      <NavLink
        to={path}
        className={clsx(
          'flex flex-row p-3 pl-4 border-r-4 hover:text-primary items-center space-x-4',
          {
            'border-primary bg-bgOrange text-primary font-semibold lg:text-sm sm:text-[10px]':
              pathname.includes(path),
            'border-transparent font-normal lg:text-sm sm:text-[10px]':
              !pathname.includes(path),
          }
        )}
      >
        {icon}
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
SideBarItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.element,
  subMenuItems: PropTypes.array,
};

export default SideBarItem;
