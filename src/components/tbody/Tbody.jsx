import PropTypes from 'prop-types';
import { TableLoadingBody } from '../loaders/Loaders';
import TEmptyBody from './TEmptyBody.jsx';
import TDataBody from './TDataBody.jsx';

export const TBody = ({
  isLoading,
  isError,
  isSuccess,
  page,
  prepareRow,
  bodyProps,
  actions,
  headerGroups,
  emptyDataSecondaryMessage,
  emptyDataPrimaryMessage,
}) => {
  return (
    <>
      {isLoading ? (
        <TableLoadingBody columnSize={headerGroups[0].headers.length} />
      ) : isError ? (
        <TEmptyBody columnSize={headerGroups[0].headers.length} error={true} />
      ) : isSuccess ? (
        page.length === 0 ? (
          <TEmptyBody
            columnSize={headerGroups[0].headers.length}
            secondaryMessage={emptyDataSecondaryMessage}
            primaryMessage={emptyDataPrimaryMessage}
          />
        ) : (
          <TDataBody
            rows={page}
            prepareRow={prepareRow}
            bodyProps={bodyProps}
            actions={actions}
          />
        )
      ) : (
        ''
      )}
    </>
  );
};

export default TBody;

TBody.propTypes = {
  prepareRow: PropTypes.func,
  bodyProps: PropTypes.func,
  actions: PropTypes.array,
  page: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  headerGroups: PropTypes.array,
  emptyDataSecondaryMessage: PropTypes.string,
  emptyDataPrimaryMessage: PropTypes.string,
};
