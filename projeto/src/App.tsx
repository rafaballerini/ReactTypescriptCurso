import { useState } from 'react'
import Form from './components/Form/index'
import List from './components/List/index'
import Stopwatch from './components/Stopwatch/index'
import { ITaskData } from './types/Task'

function timeToSeconds(defaultTime: string){
  const [hourString, minuteString, secondString] = defaultTime.split(':')
  const timeSeconds = (parseInt(hourString) * 3600) + (parseInt(minuteString) * 60) + parseInt(secondString)
  return timeSeconds
}

function App() {

  const [list, setList] = useState<ITaskData[]>([])
  const [selected, setSelected] = useState<ITaskData>()
  const [time, setTime] = useState<number>(0)
  
  function handleSaveTask(data: ITaskData) {
    setList([...list, { ...data, completed: false, selected: false }])
  }

  function handleOnClick(index: number) {
    const newList = list
    const item = newList[index]
      item.selected = true
      setSelected(item)
      newList[index] = item
      setList([...newList])
      setTime(timeToSeconds(item.time))
  }

  function handleOnFinish() {
    if (selected){
      const newList = list
      const index = list.findIndex(item => item.task === selected?.task)
      const item = newList[index]
        item.selected = false
        item.completed = true
        newList[index] = item
        setList([...newList])
        setTime(0)
    }
  }

  return (
    <div className="App">
      <Form saveTask={handleSaveTask}/>
      <List list={list} onClick={handleOnClick}/>
      <Stopwatch time={time} setTime={setTime} onFinish={handleOnFinish}/>
    </div>
  );
}

export default App