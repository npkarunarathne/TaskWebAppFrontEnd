import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';

interface DateRangePickerProps {
  onChange: (DateRange: { startDate: string | null; endDate: string | null; }) => void;
  startDate:string | null;
  endDate:string | null
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange,startDate,endDate }) => {
  const [start, setStartDate] = useState<string | null>(null);
  const [end, setEndDate] = useState<string | null>(null);

  useEffect(()=>{
    if(start){
        onChange({startDate:start,endDate:end});
    }
  },[start,end])

  useEffect(()=>{
    if(!startDate){
        setStartDate('');
        setEndDate('');
    }
  },[startDate])


  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
       <TextField
        label="Start Date"
        type="date"
        value={start}
        onChange={(event)=>{setStartDate( event.target.value); if(!endDate){setEndDate( event.target.value);}}}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        label="End Date"
        type="date"
        value={end}
        onChange={(event)=>{setEndDate( event.target.value)}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default DateRangePicker;