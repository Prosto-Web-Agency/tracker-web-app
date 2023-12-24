import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import Select from '@mui/material/Select';
import TRIcon from '../icon';
import { Box } from '@mui/material';

type DatePickerComponentProps = {
  className?: string;
  type?: 'primary' | 'secondary';
  handleChangeDate: (date: Dayjs | null) => void;
};

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  className,
  type,
  handleChangeDate,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          position: 'relative',
          width: '40px',
          height: '40px',
        }}
      >
        <div
          onClick={() => setOpen((open) => !open)}
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 10,
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TRIcon iconName="data" edgeLength={28} />
        </div>

        <Select
          open={open}
          onClose={() => setOpen(false)}
          onChange={(e) => handleChangeDate(e.target.value as Dayjs)}
          sx={{
            width: '40px',
            height: '40px',
            border: '0',
            borderRadius: '16px',
            '&.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid black',
                borderColor: 'black',
              },
            },
            fontSize: '16px',
            fontWeight: 600,
            color: '#004F74',
            backgroundColor: 'white',
            margin: '0 !important',
            '.MuiSelect-select': {
              padding: '0 8px 0 0 !important',
            },
            '.MuiOutlinedInput-notchedOutline': {
              display: 'none !important',
            },
          }}
          IconComponent={() => null}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
        >
          <DateCalendar
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Select>
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
