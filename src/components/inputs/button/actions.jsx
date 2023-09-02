import DetailsIcon from '../../../assets/icons/DetailsIcon';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import { UpdateIcon } from '../../../assets/icons/UpdateIcon';
import PropTypes from 'prop-types';
import DoneIcon from '../../../assets/icons/doneIcon';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import MessagesIcon from '../../../assets/icons/MessagesIcon';
import RefreshIcon from '../../../assets/icons/RefreshIcon.jsx';
export const DELETE_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-red-600 mx-1 hover:cursor-pointer hover:text-secondary"
    >
      <DeleteIcon />
    </button>
  );
};

export const UPDATE_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-green-600 mx-1 hover:cursor-pointer hover:text-secondary"
    >
      <UpdateIcon />
    </button>
  );
};
export const VIEW_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-green-600  mx-1 hover:cursor-pointer hover:text-secondary"
      aria-label="view"
    >
      <DetailsIcon />
    </button>
  );
};
export const ORDER_ACTION = ({ action }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => action.up()}
        className="text-primary  mx-1 hover:cursor-pointer hover:text-secondary"
      >
        <UpCircleOutlined />
      </button>
      <button
        onClick={() => action.down()}
        className="text-primary  mx-1 hover:cursor-pointer hover:text-secondary"
      >
        <DownCircleOutlined />
      </button>
    </div>
  );
};
export const STATUS_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-green-600 mx-1 hover:cursor-pointer hover:text-secondary"
    >
      <DoneIcon />
    </button>
  );
};

export const MESSAGE_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-green-600 mx-1 hover:cursor-pointer hover:text-secondary"
    >
      <MessagesIcon />
    </button>
  );
};
export const REFRESH_ACTION = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="text-orange-400 mx-1 hover:cursor-pointer hover:text-secondary"
      aria-label="refresh"
    >
      <RefreshIcon />
    </button>
  );
};
DELETE_ACTION.propTypes = {
  action: PropTypes.func,
};
UPDATE_ACTION.propTypes = {
  action: PropTypes.func,
};
STATUS_ACTION.propTypes = {
  action: PropTypes.func.isRequired,
};
VIEW_ACTION.propTypes = {
  action: PropTypes.func.isRequired,
};
ORDER_ACTION.propTypes = {
  action: PropTypes.shape({
    up: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
  }).isRequired,
};
MESSAGE_ACTION.propTypes = {
  action: PropTypes.func.isRequired,
};
REFRESH_ACTION.propTypes = {
  action: PropTypes.func.isRequired,
};
