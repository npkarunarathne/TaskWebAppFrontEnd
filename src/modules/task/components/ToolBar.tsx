import React from 'react';
import { useFilter } from '../context/FilterContext';
import { TextField, MenuItem, FormControl, InputLabel, Select, SelectChangeEvent, styled,Box } from '@mui/material';
import DateRangePicker from '../../../components/date-range-picker/DateRangePicker';


const StyledBox= styled(Box)({
    display: 'flex', 
    gap:16,
  });
  
const ToolBar: React.FC = () => {
  const { filters, setFilters } = useFilter();

  const handleDateChange = (date: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, date: date }));
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setFilters((prevFilters) => ({ ...prevFilters, status: event.target.value }));
  };

  return (
    <StyledBox>
   <DateRangePicker onChange={handleDateChange}/>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status || ''}
          onChange={handleStatusChange}
          label="Status"
          sx={{width:200}}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
    </StyledBox>
  );
};

export default ToolBar;
