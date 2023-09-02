import { useEffect } from 'react';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import Thead from '../thead/Thead';
import Pagination from '../pagination/Pagination';
import PropTypes from 'prop-types';
import TBody from '../tbody/Tbody';

const Table = ({
  rows,
  columns,
  isLoading,
  isError,
  isSuccess,
  actions,
  emptyDataPrimaryMessage,
  emptyDataSecondaryMessage,
  disablePagination=false
}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    setPageSize,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: rows,
      autoResetPage: false,
      initialState: {
        pageIndex: 0,
        pageSize: 15,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const pageOptions = {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
  };

  return (
    <>
      <table {...getTableProps} className="w-full divide-y divide-gray-200">
        <Thead header={headerGroups} />
        <TBody
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          page={page}
          prepareRow={prepareRow}
          bodyProps={getTableBodyProps}
          actions={actions}
          headerGroups={headerGroups}
          emptyDataSecondaryMessage={emptyDataSecondaryMessage}
          emptyDataPrimaryMessage={emptyDataPrimaryMessage}
        />
      </table>
      {disablePagination || isLoading || isError || rows.length === 0 ? (
        ''
      ) : (
        <Pagination
          page={pageIndex}
          pages={pageCount}
          size={pageSize}
          pageOptions={pageOptions}
        />
      )}
    </>
  );
};
export default Table;

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  setPagination: PropTypes.func,
  pagination: PropTypes.object,
  isLoading: PropTypes.bool,
  actions: PropTypes.array,
  isError: PropTypes.bool,
  totalRows: PropTypes.number,
  isSuccess: PropTypes.bool,
  totalElements: PropTypes.number,
  emptyDataSecondaryMessage: PropTypes.string,
  emptyDataPrimaryMessage: PropTypes.string,
  disablePagination: PropTypes.bool,
};
