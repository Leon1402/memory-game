import React from 'react'
import { Link } from 'react-router-dom'
import './StartField.css'

export const StartField = ({ name, changeName }) => {
    return (
        <div className='start-field'>
            <input type='text' className='start-field__name'
                placeholder='Введите ваше имя'
                onChange={(e) => {
                    changeName(e.currentTarget.value)
                }}
                value={name} />

            <Link to={`/game`}
                className={name.length
                    ? 'start-field__button'
                    : 'start-field__button start-field__button_disable'}>Начать игру</Link>

            <Link to='/results' className='start-field__link'>Результаты</Link>
        </div>
    )
}