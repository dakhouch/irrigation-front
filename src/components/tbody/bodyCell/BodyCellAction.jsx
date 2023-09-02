import PropTypes from 'prop-types';
import {
  DELETE_ACTION,
  MESSAGE_ACTION,
  REFRESH_ACTION,
  STATUS_ACTION,
  UPDATE_ACTION,
  VIEW_ACTION,
} from '../../inputs/button/actions.jsx';
const BodyCellAction = ({ actionCell, actions }) => {
  return (
    <>
      <td
        {...actionCell.getCellProps()}
        className="px-6 py-4 whitespace-nowrap"
        role="cell"
      >
        {actions.map((action, index) => {
          switch (action.name) {
            case 'DELETE':
              return (
                <DELETE_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );

            case 'UPDATE':
              return (
                <UPDATE_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );
            case 'VIEW':
              return (
                <VIEW_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );
            case 'STATUS_ACTION':
              return (
                <STATUS_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );
            case 'MESSAGE_ACTION':
              return (
                <MESSAGE_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );
            case 'REFRESH':
              return (
                <REFRESH_ACTION
                  key={index}
                  action={() => action.do(actionCell.row.original[action.id])}
                />
              );
          }
        })}
      </td>
    </>
  );
};
export default BodyCellAction;
BodyCellAction.propTypes = {
  actionCell: PropTypes.object,
  actions: PropTypes.array,
};
