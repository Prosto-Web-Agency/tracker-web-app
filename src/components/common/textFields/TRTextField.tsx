import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type TRTextFieldProps } from './TRTextFieldProps';

export default function TRTextField({
  value,
  onChange,
  validationRule,
  placeholder,
  disabled,
  type,
  autocomplete,
  startContent,
  endContent,
  style,
  className,
  ...params
}: TRTextFieldProps): ReactElement {
  return (
    <TextField
      {...params}
      value={value}
      onChange={({ target }): void =>
        onChange?.(
          target.value,
          validationRule ? validationRule(target.value) : true,
        )
      }
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      autoComplete={autocomplete}
      InputProps={{
        ...(params as any).InputProps,
        startAdornment: startContent ? (
          <InputAdornment position="start">{startContent}</InputAdornment>
        ) : undefined,
        endAdornment: endContent ? (
          <InputAdornment position="end">{endContent}</InputAdornment>
        ) : undefined,
        sx: {
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              border: '2px solid gray',
              color: 'black',
            },
            color: '#9A9A9A',
            fontSize: '18px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            // border: '1px solid gray',
            // borderColor: '#AFAFAF',
            // color: '#9A9A9A',
          },
          '&:hover': {
            // border: '2px solid gray',
            // borderColor: '#AFAFAF',
          },
          borderRadius: '16px',
          background: '#EEE',
          color: '#9A9A9A',
          transition: '0.5s',
          height: '51px',
          fontSize: '16px',
          fontWeight: '600'
        },
      }}
      style={style}
      className={'w-full' + (className ? ' ' + className : '')}
    />
  );
}
