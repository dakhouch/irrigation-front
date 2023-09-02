import {
  SortIcon,
  SortUpIcon,
  SortDownIcon,
} from '../../assets/icons/SortIcons.jsx';
import PropTypes from 'prop-types';

const HeaderCell = ({ column }) => {
  return (
    <th
      scope="col"
      className="group px-3 py-3 lg:text-xs text-[9px]  font-medium text-gray-500 uppercase tracking-wider text-center"
      {...column.getHeaderProps(column.getSortByToggleProps())}
    >
      <div className="flex items-center justify-between">
        {column.render('Header') === 'Orders' ? (
          ''
        ) : (
          <>
            <div className="w-full text-center">{column.render('Header')}</div>
            <span>
              {column.isSorted ? (
                column.isSortedDesc ? (
                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                ) : (
                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                )
              ) : (
                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
              )}
            </span>
          </>
        )}
      </div>
    </th>
  );
};
export default HeaderCell;
HeaderCell.propTypes = {
  column: PropTypes.shape({
    getHeaderProps: PropTypes.func.isRequired,
    getSortByToggleProps: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
    isSorted: PropTypes.bool,
    isSortedDesc: PropTypes.bool,
  }).isRequired,
};
