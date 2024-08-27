import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';

interface DateRangePickerProps {
  onChange: (DateRange: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');


  useEffect(()=>{
    if(startDate){
        onChange(`${startDate}-${endDate}`);
    }
  },[startDate,endDate])


  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
       <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(event)=>{setStartDate( event.target.value); if(!endDate){setEndDate( event.target.value);}}}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(event)=>{setEndDate( event.target.value)}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default DateRangePicker;