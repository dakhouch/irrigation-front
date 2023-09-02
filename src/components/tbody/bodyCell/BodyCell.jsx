import PropTypes from 'prop-types';

const BodyCell = ({ cell }) => {
  return (
    <td
      {...cell.getCellProps()}
      className="px-6 py-4 whitespace-nowrap text-center"
      role="cell"
    >
      {cell.column.Cell.name === 'defaultRenderer' ? (
        <div className="text-sm text-gray-500 w-fit">{cell.render('Cell')}</div>
      ) : (
        <div
          className="text-sm text-gray-500 w-full text-center"
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
          }}
        >
          {cell.render('Cell')}
        </div>
      )}
    </td>
  );
};

export default BodyCell;
BodyCell.propTypes = {
  cell: PropTypes.object,
  handleEdit: PropTypes.func,
};
