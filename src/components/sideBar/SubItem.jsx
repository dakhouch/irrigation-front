import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const SubItem = ({ path, title }) => {
  return (
    <li className="ml-7">
      <NavLink
        to={path}
        className={({ isActive }) =>
          clsx(
            'flex flex-row  lg:text-sm sm:text-[10px] p-1.5 hover:text-secondary items-center',
            {
              ' text-secondary font-semibold': isActive,
              'border-transparent font-normal': !isActive,
            }
          )
        }
      >
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
SubItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
export default SubItem;
