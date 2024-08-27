import React from 'react';
import { useFilter } from '../context/FilterContext';
import { TextField, MenuItem, FormControl, InputLabel, Select, SelectChangeEvent, styled,Box, Button } from '@mui/material';
import DateRangePicker from '../../../components/date-range-picker/DateRangePicker';
import { useTask } from '../context/TaskContext';


const StyledBox= styled(Box)({
    display: 'flex', 
    gap:16,
    justifyContent:'space-between'
  });
  
const ToolBar: React.FC = () => {
  const { filters, setFilters } = useFilter();
  const {setShowForm}=useTask()

  const handleDateChange = (dates: { startDate: string | null; endDate: string | null; }) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...dates }));
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setFilters((prevFilters) => ({ ...prevFilters, status: event.target.value?event.target.value:null }));
  };

  const onClear = () => {
    setFilters({
        startDate: null,
        endDate: null,
        status: null, 
      });
  };

  return (
    <StyledBox>
        <Box display={'flex'} gap={2}>
        <DateRangePicker onChange={handleDateChange} startDate={filters.startDate}  endDate={filters.endDate}/>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status || ''}
          onChange={handleStatusChange}
          label="Status"
          sx={{width:200}}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Todo">Todo</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
      <Button onClick={onClear}>Clear</Button>
        </Box>
 
      <Box alignSelf={'end'}>
      <Button  variant='outlined' onClick={()=>setShowForm(true)}>Add</Button>
      </Box>
     
    </StyledBox>
  );
};

export default ToolBar;

