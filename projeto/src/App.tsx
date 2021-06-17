import React, { useState } from 'react';
import Form from './components/Form/index'
import Item from './components/Item/index';
import { ITaskData } from './types/Task'

function App() {

  const [item, setItem] = useState<ITaskData>()
  
  function handleSaveTask(data: ITaskData) {
    setItem({ ...data, completed: false, selected: false })
  }

  return (
    <div className="App">
      <Form saveTask={handleSaveTask}/>
      {item && <Item item={item}/>}
    </div>
  );
}

export default App;