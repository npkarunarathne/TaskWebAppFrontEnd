import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress } from '@mui/material';
import { useGetTaskFilterDataMutation } from '../../store/api/task/taskApiSlice';
import { FilterProvider } from './context/FilterContext';
import ToolBar from './components/ToolBar';
import TaskTable from './components/TaskTable';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';

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

 const  TaskList = () => {

  const [getTaskFilterData, { data: taskData, isLoading, isSuccess }] =
  useGetTaskFilterDataMutation();

  React.useEffect(()=>{
    getTaskFilterData({
      "startDate": null,
      "endDate": null,
      "status": null
    })
  },[])

  React.useEffect(()=>{
    if(isSuccess){
      console.log(taskData)
    }
  })

  return (
    <Box p={5}>
      <TaskProvider>
        <FilterProvider>
          <ToolBar />
          <TaskTable/>
          <TaskForm/>
        </FilterProvider>
      </TaskProvider>
    </Box>
  );
}

export default TaskList