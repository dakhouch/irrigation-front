import { Select } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const SelectorInput = ({
  label,
  options,
  defaultValue,
  control,
  name,
  placeholder,
  loading,
  isHidden = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <div
      className={`flex flex-col space-y-2 px-2  py-1 w-full ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <label className="text-dark-300 tracking-wider uppercase font-semibold lg:text-sm sm:text-[10px]">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={null}
        render={({ field }) => (
          <Select
            {...field}
            onChange={(value) => {
              field.onChange(value);
              setSelectedValue(value);
            }}
            value={selectedValue}
            placeholder={placeholder}
            loading={loading}
          >
            {options.map((option) => (
              <Select.Option key={option.key} value={option.value}>
                {option.value}
              </Select.Option>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default SelectorInput;

SelectorInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  control: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  isHidden: PropTypes.bool,
};
