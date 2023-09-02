import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bars } from 'react-loader-spinner';

const Button = ({ label, type, isLoading, onClick }) => {
  return (
    <>
      <button
        disabled={isLoading}
        type="button"
        onClick={onClick}
        className={clsx(
          'focus:outline-none border inline-flex items-center px-6 py-2  justify-center rounded-sm',
          {
            'bg-primary border-primary text-white lg:text-lg text-[10px]  hover:text-primary':
              type === 'SUBMIT',
            'bg-transparent hover:bg-white border-gray-500 text-gray-600 lg:text-lg text-[10px]':
              type === 'CANCEL',
            'bg-secondary border-secondary text-white text-[10px] lg:text-lg  hover:text-secondary':
              type === 'DELETE',
            'cursor-not-allowed': isLoading && type === 'SUBMIT',
            'cursor-pointer hover:bg-white': !isLoading,
          }
        )}
      >
        {isLoading && type === 'SUBMIT' ? (
          <Bars
            height="25"
            width="25"
            color="#fff"
            ariaLabel="bars-loading"
            visible={true}
          />
        ) : (
          <span className="font-normal tracking-wide text-sm lg:text-lg ">
            {label}
          </span>
        )}
      </button>
    </>
  );
};
export const PageButton = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="relative inline-flex  items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['SUBMIT', 'CANCEL', 'DELETE']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};
PageButton.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};
