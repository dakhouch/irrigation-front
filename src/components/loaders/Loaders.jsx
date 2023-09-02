import { FallingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
export const TableLoadingBody = ({ columnSize }) => {
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="text-center" colSpan={columnSize}>
            <div className="flex justify-center p-12">
              <FallingLines color="#E3AA00" width="100" visible={true} />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};
export const DefaultLoader = ({ size }) => {
  return (
    <div className="w-full h-full flex items-center justify-center z-50">
      <FallingLines color="#E3AA00" width={size} visible={true} />
    </div>
  );
};
DefaultLoader.propTypes = {
  size: PropTypes.number,
};
TableLoadingBody.propTypes = {
  columnSize: PropTypes.number.isRequired,
};
