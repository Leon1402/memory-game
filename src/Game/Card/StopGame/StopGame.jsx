import { Link } from 'react-router-dom';
import './StopGame.css';

export const StopGame = (props) => {
    return (
        <div className='stop-game'>
        <div className='stop-game__title'>
          Конец игры
         </div>
        <div className='stop-game__result'>Ваш Результат: {props.timer}</div>
      <Link to='/results' className='stop-game__link'>Результаты</Link>
      </div>
    )
}