import React, { useState } from 'react';
import Form from '../components/form/index.';

import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { Itask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Stopwatch/>
    </div>
  );
}

export default App;
