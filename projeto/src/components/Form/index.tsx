import React from 'react';
import { useState } from 'react';
import { ITaskData } from '../../types/Task';

interface IFormProps {
  saveTask: (data: ITaskData) => void;
}

function Form (props: IFormProps) {

  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    props.saveTask({task, time})
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="inputContainer">
        <label htmlFor="task">Nova tarefa</label>
        <input 
          type="text" 
          name="task" 
          id="task" 
          value={task}
          placeholder="O que você estudará?" 
          onChange={(event) => { setTask(event.target.value) }}
          required/>
      </div>
      <div className="inputContainer">
        <label htmlFor="time">Tempo</label>
        <input 
          type="time" 
          name="time" 
          id="time" 
          value={time}
          placeholder="00:00" 
          onChange={(event) => { setTime(event.target.value) }}
          required/>
        </div>
      <button 
        type="submit" 
        style={{ display: 'none'}}>
          Confirmar Tarefa
      </button>
    </form>
  )
}

export default Form;