import { useState } from 'react'
import Form from './components/Form/index'
import List from './components/List/index'
import Stopwatch from './components/Stopwatch/index'
import { ITaskData } from './types/Task'

function App() {

  const [list, setList] = useState<ITaskData[]>([])
  const [selected, setSelected] = useState<ITaskData>()
  
  function handleSaveTask(data: ITaskData) {
    setList([...list, { ...data, completed: false, selected: false }])
  }

  function handleOnClick(index: number) {
    const newList = list
    const item = newList[index]
      item.selected = true
      setSelected(item)
      newList[index] = item
      setList(newList)
      console.log(item)
  }

  return (
    <div className="App">
      <Form saveTask={handleSaveTask}/>
      <List list={list} onClick={handleOnClick}/>
      <Stopwatch defaultTime={selected?.time}/>
    </div>
  );
}

export default App