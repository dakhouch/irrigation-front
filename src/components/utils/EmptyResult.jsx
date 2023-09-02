import EmptyIcon from '../../assets/icons/EmptyIcon';
import PropTypes from 'prop-types';

const EmptyResult = ({ mainMessage, secondMessage, size }) => {
  return (
    <div className="grid place-items-center h-full p-6 ">
      <div className="grid place-items-center">
        <EmptyIcon size={size} />
        <p className="ml-3 font-semibold tracking-wider text-lg text-gray-600">
          {mainMessage}
        </p>
        <p className="font-normal tracking-widest text-sm text-gray-500">
          {secondMessage}
        </p>
      </div>
    </div>
  );
};

export default EmptyResult;

EmptyResult.propTypes = {
  mainMessage: PropTypes.string,
  secondMessage: PropTypes.string,
  size: PropTypes.string,
};
