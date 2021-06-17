import React, { useState } from 'react';
import Form from './components/Form/index'
import List from './components/List/index'
import { ITaskData } from './types/Task'

function App() {

  const [list, setList] = useState<ITaskData[]>([])
  
  function handleSaveTask(data: ITaskData) {
    setList([...list, { ...data, completed: false, selected: false }])
  }

  return (
    <div className="App">
      <Form saveTask={handleSaveTask}/>
      <List list={list}/>
    </div>
  );
}

export default App;