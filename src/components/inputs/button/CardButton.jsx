import { Card } from 'antd';
import PropTypes from 'prop-types';

const AddItemCardBottom = ({ onClick }) => {
  return (
    <Card
      className="text-center items-center w-full  flex justify-center mb-2 h-min-fit flex-grow"
      hoverable
      onClick={onClick}
    >
      <p className="text-awesomegray tracking-wider uppercase font-thin text-sm ">
        + Ajouter une Story
      </p>
    </Card>
  );
};

export default AddItemCardBottom;
AddItemCardBottom.propTypes = {
  onClick: PropTypes.func.isRequired,
};
