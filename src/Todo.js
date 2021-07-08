import React from 'react'
import { Button, Checkbox } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export default function Todo({ todo, handleTaskChecked, handleDeleteTask, classes }) {
    const handleChecked = () => {
        handleTaskChecked(todo);
    }
    const handleDelete = () => {
        handleDeleteTask(todo);
    }
    return (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                <Checkbox
                    checked={todo.checked}
                    onChange={handleChecked}
                    inputProps={{ 'aria-label': 'primary checkbox' }} />
              </TableCell>
              <TableCell align="right">
                  {todo.text}
                </TableCell>
              <TableCell align="right">{todo.startDate}</TableCell>
              <TableCell align="right">{todo.endDate}</TableCell>
              <TableCell align="right"><Button variant="outlined" color="secondary" onClick={handleDelete} >X</Button></TableCell>
            </TableRow>
          
    )
}
