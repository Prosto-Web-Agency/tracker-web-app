import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUTextFieldProps } from './QUTextFieldProps';

export default function ChatTextField({
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
}: QUTextFieldProps): ReactElement {
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
                            border: '2px solid silver',
                            color: '#EEE',
                        },
                        color: 'black',
                        fontSize: '17px',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        // border: '1px solid gray',
                        // borderColor: '#AFAFAF',
                        // color: '#9A9A9A',
                    },
                    borderRadius: '24px',
                    background: '#EEE',
                    color: 'black',
                    transition: '0.5s',
                    height: '31px',
                    fontSize: '16px',
                    fontWeight: '400',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}