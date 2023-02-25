import React, { useState } from 'react';
import Form from '../components/form/index.';

import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { Itask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(taskSelected: Itask) {
    setSelected(taskSelected);
  }
 
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectedTask={function (selectTask: Itask): void {
        throw new Error('Function not implemented.');
      } }/>
      <Stopwatch/>
    </div>
  );
}

export default App;
