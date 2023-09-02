import HeaderCell from './HeaderCell.jsx';
import PropTypes from 'prop-types';
const Thead = ({ header }) => {
  return (
    <thead className="bg-green-50">
      {header.map((headerGroup, index_1) => (
        <tr key={index_1} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(
            (column, index_2) =>
              column.show && <HeaderCell column={column} key={index_2} />
          )}
        </tr>
      ))}
    </thead>
  );
};
export default Thead;
Thead.propTypes = {
  header: PropTypes.array,
};
