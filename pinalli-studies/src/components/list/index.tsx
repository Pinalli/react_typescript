
import style from './List.module.scss';
import Item from './item';
import { Itask } from '../../types/task';

interface Props{
  tasks: Itask[];
  selecteTask: (selectedTask: Itask) => void;
}
function List({tasks, selecteTask}: Props) {   
  return (
    <aside className={style.listTasks}>
      <h2 >Estudos do dia </h2>
      <ul>
        {tasks.map((item) => (
         <Item 
         selecteTask={selecteTask}
         key={index.id}
         {...item}/>
        ))}
      </ul>
    </aside>
  )
}

export default List;