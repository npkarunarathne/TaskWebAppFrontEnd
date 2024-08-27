import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress } from '@mui/material';
import { useGetTaskFilterDataMutation } from '../../../store/api/task/taskApiSlice';
import { useFilter } from '../context/FilterContext';

const  createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) => {
  return { name, calories, fat, carbs, protein };
}

const header = [
  {key:"name",name:"Name"},
  {key:"description",name:"Description"},
  {key:"attachmentUrl",name:"Attachment"},
  {key:"status",name:"Status"},
]

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 const  TaskTable = () => {

    const { filters } = useFilter();
  const [getTaskFilterData, { data: taskData, isLoading, isSuccess }] =
  useGetTaskFilterDataMutation();

  React.useEffect(()=>{
    getTaskFilterData({...filters})
  },[])

  React.useEffect(()=>{
    if(isSuccess){
      console.log(taskData)
    }
  })

  return (
    <Box pt={1}>
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((col:any)=>(
                <TableCell key={col.key}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {taskData && taskData.map((row:any) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {header.map((col:any)=>(
                <TableCell key={col.key}>{row[col.key]}</TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
          {isLoading && 
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TaskTable