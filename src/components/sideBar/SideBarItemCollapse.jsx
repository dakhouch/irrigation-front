import { useState } from 'react';
import DownIcon from '../../assets/icons/DownIcon';
import { useLocation } from 'react-router-dom';
import ListSubItem from './ListSubItem';
import clsx from 'clsx';
import TopIcon from '../../assets/icons/TopIcon copy';
import PropTypes from 'prop-types';

const SideBarItemCollapse = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={clsx(
          'flex flex-row p-3 pl-4 border-r-4 hover:text-primary items-center space-x-4',
          {
            'border-primary bg-bgOrange text-primary font-semibold':
              pathname.includes(data.link),
            'border-transparent font-normal': !pathname.includes(data.link),
          }
        )}
        onClick={() => {
          setSubMenuOpen(!subMenuOpen);
        }}
      >
        {data.icon}{' '}
        <p className="flex-1 capitalize  lg:text-sm sm:text-[10px]">
          {data.label}
        </p>
        {subMenuOpen ? <TopIcon /> : <DownIcon />}
      </li>
      {subMenuOpen ? <ListSubItem subItems={data.subLinks} /> : <></>}
    </>
  );
};

export default SideBarItemCollapse;
SideBarItemCollapse.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    subLinks: PropTypes.array.isRequired,
  }).isRequired,
};
