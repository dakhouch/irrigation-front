import EmptyResult from '../utils/EmptyResult.jsx';
import PropTypes from 'prop-types';

const TEmptyBody = ({
  columnSize,
  error,
  primaryMessage,
  secondaryMessage,
}) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td colSpan={columnSize}>
          <EmptyResult
            mainMessage={error ? 'Erreur Survenue!' : primaryMessage}
            secondMessage={error ? '' : secondaryMessage}
            size={'150px'}
          />
        </td>
      </tr>
    </tbody>
  );
};
export default TEmptyBody;

TEmptyBody.propTypes = {
  columnSize: PropTypes.number,
  error: PropTypes.bool,
  primaryMessage: PropTypes.string,
  secondaryMessage: PropTypes.string,
  emptyDataSecondaryMessage: PropTypes.string,
  emptyDataPrimaryMessage: PropTypes.string,
};
