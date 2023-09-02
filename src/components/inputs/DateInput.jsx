import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';

const DateInput = ({
  label,
  name,
  control,
  isRequired = true,
  disabledDate,
  isHidden = false,
  showTime = false,
}) => {
  return (
    <div
      className={`flex flex-col space-y-2 px-4 py-1 w-full ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <label className="text-dark-300 tracking-wider uppercase font-semibold lg:text-sm text-[9px]">
        {label}{' '}
        {isRequired ? (
          <span className="text-red-600 font-semibold text-base">*</span>
        ) : (
          <></>
        )}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              <DatePicker
                status={fieldState.error ? 'error' : null}
                showTime={showTime ? { format: 'HH:mm' } : false}
                ref={field.ref}
                name={field.name}
                value={
                  field.value
                    ? showTime
                      ? dayjs(field.value, 'DD-MM-YYYY HH:mm')
                      : dayjs(field.value,'DD-MM-YYYY')
                    : null
                }
                onBlur={field.onBlur}
                format={showTime ? 'DD-MM-YYYY HH:mm' : 'DD-MM-YYYY'}
                onChange={(date) =>
                  date
                    ? showTime
                      ? field.onChange(date.format('DD-MM-YYYY HH:mm'))
                      : field.onChange(
                          dayjs(date).format('DD-MM-YYYY')
                        )
                    : field.onChange(null)
                }s
                disabledDate={disabledDate}
              />

              {fieldState.error ? (
                <p className="lg:text-sm text-[9px] font-medium text-red-600">
                  {fieldState.error?.message}
                </p>
              ) : null}
            </>
          );
        }}
      />
    </div>
  );
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  control: PropTypes.object,
  isRequired: PropTypes.bool,
  disabledDate: PropTypes.func,
  isHidden: PropTypes.bool,
  showTime: PropTypes.bool,
};
export default DateInput;
