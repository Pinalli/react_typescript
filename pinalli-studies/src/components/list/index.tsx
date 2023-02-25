
import style from './List.module.scss';
import Item from './item';
import { Itask } from '../../types/task';

function List({tasks}: {tasks:Itask[]}) {   
  return (
    <aside className={style.listTasks}>
      <h2 >Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
         <Item 
         key={index}
         {...item}/>
        ))}
      </ul>
    </aside>
  )
}

export default List;