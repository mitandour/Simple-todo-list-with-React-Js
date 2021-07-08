import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

export default function NewTodo({ addNewTodo, classes }) {

    const [inputDataForm, setInputDataForm] = useState({
        newTask: "",
        startDate: Date(),
        endDate: Date()
    });

    
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTodo(inputDataForm)
        setInputDataForm(
            {
                newTask: "",
                startDate: Date(),
                endDate: Date()
            }
        );
    }

    const handleChange = (e) => {
        setInputDataForm({
            ...inputDataForm,
            [e.target.name]: e.target.value
        })
        console.log(inputDataForm)
    }

    return (
        <div >
            <h2>Add a new task here!</h2>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                    label="New task..."
                    type="text"
                    value={inputDataForm.newTask}
                    name="newTask"
                    onChange={e => { handleChange(e) }} />
                <br />
                <TextField
                    id="date"
                    label="Start"
                    type="date"
                    name="startDate"
                    value={inputDataForm.startDate}
                    onChange={e => handleChange(e) }
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="date"
                    label="End"
                    type="date"
                    name="endDate"
                    value={inputDataForm.endDate}
                    onChange={e => handleChange(e) }
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <div>
                    <br/>
                <Button type="submit" variant="contained" color="primary">Add Task!</Button>
            </div>
            </form>
           
        </div>
    )
}
