import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PageButton } from '../inputs/button/Button';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const Pagination = ({ page, size, pages, pageOptions }) => {
  return (
    <div className="py-3 flex items-center justify-between">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-baseline">
          <Select
            defaultValue={size}
            style={{ width: 80, borderColor: 'red' }}
            onChange={(value) => {
              pageOptions.setPageSize(value);
            }}
            options={[{ value: 10 }, { value: 20 }, { value: 50 }]}
          />
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <PageButton
              onClick={() => pageOptions.previousPage()}
              disabled={!pageOptions.canPreviousPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>

            <div className="p-2">
              <span className="text-sm text-gray-700">
                {page + 1 + ' / ' + pages}
              </span>
            </div>
            <PageButton
              onClick={() => pageOptions.nextPage()}
              disabled={!pageOptions.canNextPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
Pagination.propTypes = {
  page: PropTypes.number,
  size: PropTypes.number,
  pages: PropTypes.number,
  pageOptions: PropTypes.object,
};
