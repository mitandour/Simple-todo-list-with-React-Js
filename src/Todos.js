import React from 'react'
import Todo from './Todo'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Todos({todos, handleTaskChecked, handleDeleteTask, classes}) {
    return (
        <div>
            <h2>My Tasks! </h2>
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Done ?</TableCell>
                        <TableCell align="right">Task</TableCell>
                        <TableCell align="right">Start</TableCell>
                        <TableCell align="right">End</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                                <TableBody>
                                    {todos.map((todo) => {
                            return <Todo
                                todo={todo}
                                key={todo.id}
                                handleTaskChecked={handleTaskChecked}
                                handleDeleteTask={handleDeleteTask}
                                classes={classes} />
                        })}
                    
                    </TableBody>
                </Table>
    </TableContainer>
        </div>
    )
}
