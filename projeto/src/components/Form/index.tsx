import React from 'react';
import { useState } from 'react';
import { ITaskData } from '../../types/Task';
import styles from './style.module.scss'

interface IFormProps {
  saveTask: (data: ITaskData) => void;
}

let count = 0

export function Form (props: IFormProps) {

  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    props.saveTask({task, time, id: count})
    setTask('')
    setTime('00:00')
    count++
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Nova tarefa</label>
        <input 
          type="text" 
          name="task" 
          id="task" 
          value={task}
          placeholder="O que você fará?" 
          onChange={(event) => { setTask(event.target.value) }}
          required/>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input 
          type="time"
          step="1" 
          name="time" 
          id="time" 
          min="00:00:00"
          max="01:30:00"
          value={time}
          onChange={(event) => { setTime(event.target.value) }}
          required/>
        </div>
      <button type="submit">Adicionar</button>
    </form>
  )
}