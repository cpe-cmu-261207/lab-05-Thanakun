import { useState } from 'react'
import React from 'react'
import Task from './Task'
import DoneSec from './Done'

type TaskData = {
    id: number;
    name: string;
}

const Todolist = () => {
    const [CurrentTask, setCurrentTask] = useState <string>('')
    const [tasks, setTasks] = useState <TaskData[]>([])
    const [donetasks, setdoneTasks] = useState <TaskData[]>([])

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter')
            addTask(CurrentTask)
    }

    const reset = () => {
        const resetValue = document.querySelector('input');
        if (resetValue != null) {
            resetValue.value = "";
        }
        setCurrentTask("")
    }

    const addTask = (taskName: string) => {
        if (taskName === "") {
            alert("Task cannot be empty");
        } else {
            const newId = (new Date()).getTime()
            const newTasks = [{ id: newId, name: taskName }, ...tasks]
            setTasks(newTasks)
        }
        reset();
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    const doneTask = (id: number) => {
        const newDone = tasks
        const task = newDone[newDone.findIndex(x => x.id === id)];
        const newId = (new Date()).getTime()
        const newdoneTasks = [{ id: newId, name: task.name }, ...donetasks]
        setdoneTasks(newdoneTasks)
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(CurrentTask)}>+</button>
            </div>

                {tasks.map(x => <Task id={x.id} name={x.name} donefunction={doneTask} deletefunction={deleteTask} />)}
            
                {donetasks.map(x => <DoneSec id={x.id} name={x.name} />)}
        </div>
    )
}

export default Todolist