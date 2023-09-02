import { ORDER_ACTION } from '../../inputs/button/actions.jsx';
import PropTypes from 'prop-types';

const BodyCellOrder = ({ orderCell, actions }) => {
  return (
    <>
      <td
        {...orderCell.getCellProps()}
        className="px-6 py-4 whitespace-nowrap"
        role="cell"
      >
        {actions.map((action, index) => {
          switch (action.name) {
            case 'ORDER':
              return (
                <ORDER_ACTION
                  key={index}
                  action={{
                    up: () => action.up(orderCell.row.original[action.id]),
                    down: () => action.down(orderCell.row.original[action.id]),
                  }}
                />
              );
          }
        })}
      </td>
    </>
  );
};
export default BodyCellOrder;
BodyCellOrder.propTypes = {
  orderCell: PropTypes.object.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      up: PropTypes.func,
      down: PropTypes.func,
    })
  ).isRequired,
};
