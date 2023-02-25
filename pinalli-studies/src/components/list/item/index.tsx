import { Itask } from '../../../types/task'
import style from '../List.module.scss'

interface Props extends Itask{
  selecteTask= (selectedTask: Itask) => void
}

export default function Item(
  {task, time, selected,completed, id, selecteTask }:Itask){
  console.log('item atual:', {task, time, selected,completed, id });
    return (
    <li className={style.item}>
    <h3>{task}</h3>
    <span>{time}</span>
  </li>
    )
  } 