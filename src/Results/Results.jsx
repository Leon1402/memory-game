import { Link } from 'react-router-dom'
import { getTime } from '../utils/getTime'
import './Results.css'

export const Results = ({ results }) => {
    return (
        <div className='results'>
            {
                results.map((result, index) => (
                    <div className='results__item' key={index}>
                        <span className='results__name'>Имя: {result.name} </span>
                        <span className='results__time'>Время: {getTime(result.result)}</span>
                    </div>
                ))
            }
            <Link to='/' className='results__link'>Назад</Link>
        </div>
    )
}