import { AppBar, Typography, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './App.css'
import NewTodo from './NewTodo'
import Todos from './Todos'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}))

function App() {
  const classes = useStyles()

  const [todos, setTodos] = useState([])

  const addNewTodo = (value) => {
    let i = todos.length
    let newValue = {
      id: i,
      text: value.newTask,
      startDate: value.startDate,
      endDate: value.endDate,
      delay: value.endDate - value.startDate,
      checked: false
    }
    setTodos([...todos, newValue])
  }

  const handleTaskChecked = (todo) => {
    let todoList = [...todos]
    let el = todoList.find(el => el.id === todo.id)
    el.checked = !el.checked
    setTodos(todoList)
  }

  const handleDeleteTask = (todo) => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Typography variant="h2"> To-do App</Typography>
      </AppBar>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid item xs={4}>
            <NewTodo
              addNewTodo={addNewTodo}
              classes={classes} />
          </Grid>
          <Grid item xs={8}>
            <Todos
              todos={todos}
              handleTaskChecked={handleTaskChecked}
              handleDeleteTask={handleDeleteTask}
              classes={classes}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
