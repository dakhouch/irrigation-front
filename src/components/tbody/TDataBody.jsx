import BodyCellAction from './bodyCell/BodyCellAction.jsx';
import BodyCellOrder from './bodyCell/BodyCellOrder.jsx';
import BodyCell from './bodyCell/BodyCell.jsx';
import PropTypes from 'prop-types';

const TDataBody = ({ rows, prepareRow, bodyProps, actions }) => {
  return (
    <tbody {...bodyProps} className="bg-white divide-y divide-gray-200">
      {rows.map((row, index_1) => {
        prepareRow(row);
        return (
          <tr key={index_1} {...row.getRowProps()} className="hover:bg-zinc-50">
            {row.cells.map((cell, index_2) => {
              if (cell.column.Header === 'Actions')
                return (
                  <BodyCellAction
                    actionCell={cell}
                    key={index_2}
                    actions={actions}
                  />
                );
              else if (cell.column.Header === 'Orders') {
                return (
                  <BodyCellOrder
                    orderCell={cell}
                    actions={actions}
                    key={index_2}
                  />
                );
              } else
                return cell.column.show ? (
                  <BodyCell cell={cell} key={index_2} />
                ) : null;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
export default TDataBody;
TDataBody.propTypes = {
  rows: PropTypes.array,
  prepareRow: PropTypes.func,
  bodyProps: PropTypes.func,
  actions: PropTypes.array,
};
