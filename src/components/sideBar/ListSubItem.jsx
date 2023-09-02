import PropTypes from 'prop-types';
import SubItem from './SubItem';

const ListSubItem = ({ subItems }) => {
  return (
    <ul className="ml-7 mt-2 border-primary border-dashed border-l-[1.5px]">
      {subItems.map((item) => {
        return <SubItem key={item.label} title={item.label} path={item.link} />;
      })}
    </ul>
  );
};
ListSubItem.propTypes = {
  subItems: PropTypes.array,
};
export default ListSubItem;
