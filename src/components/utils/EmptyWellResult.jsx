import well from "../../assets/images/well.png";
import PropTypes from 'prop-types';

const EmptyWellResult = ({ mainMessage, secondMessage, ...props }) => {
    return (
        <div className="grid place-items-center h-full p-6 ">
            <div className="grid place-items-center">
                <img src={well} {...props}/>
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

export default EmptyWellResult;

EmptyWellResult.propTypes = {
    mainMessage: PropTypes.string,
    secondMessage: PropTypes.string,
    size: PropTypes.string,
};
