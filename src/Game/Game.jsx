import React from 'react'
import { Redirect } from 'react-router'
import { getRandomNumbers } from '../utils/randomGenerator'
import { Card } from './Card/Card'
import { getTime } from '../utils/getTime';
import './Game.css'

const Game = ({ field, openCard, timer }) => {

    return (
        <div className='game'>
            <div className='game__timer'>{getTime(timer)}</div>
            <div className='game__field'>
                {
                    field.map((item, index) => (
                        <Card item={item} key={index} openCard={openCard} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export class GameContainer extends React.Component {
    myField = getRandomNumbers(35, 0, 18)
    state = {
        field: this.myField.map(item => ({
            number: item,
            open: false,
            find: false
        })),
        turn: 0,
        openedFirstCardIndex: '',
        openCardCounter: 0,
    }

    componentDidMount() {
        console.log(this.props)
        this.timer = setInterval(() => {
            this.props.startTimer()
        }, 1000)
    }

    componentDidUpdate() {
        if (!this.endGame)
            if (this.state.openCardCounter >= 18) {
                clearInterval(this.timer)
                this.props.addResult()
                this.endGame = true
            }
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutName)
    }

    timeout = () => {
        clearTimeout(this.timeoutName)
        this.timeoutName = setTimeout(() => {
            this.setState({
                ...this.state,
                field: this.state.field.map((item, i) => {
                    return {
                        ...item, open: false
                    }
                }),
                turn: 0,
            })
        }, 5000)
    }

    openCard = (index) => {
        switch (this.state.turn) {
            case 0:
                clearTimeout(this.timeoutName)
                this.setState({
                    ...this.state,
                    field: this.state.field.map((item, i) => {
                        if (index === i) {
                            return {
                                ...item, open: true
                            }
                        }
                        return { ...item, open: false };
                    }),
                    turn: 1,
                    openedFirstCardIndex: index
                })
                this.timeout()
                break;
            case 1:
                if (this.state.field[index].number === this.state.field[this.state.openedFirstCardIndex].number) {
                    this.setState({
                        ...this.state,
                        field: this.state.field.map((item, i) => {
                            if (i === this.state.openedFirstCardIndex || i === index) {
                                return {
                                    ...item, open: false, find: true
                                }
                            }
                            return item;
                        }),
                        turn: 0,
                        openCardCounter: this.state.openCardCounter + 1
                    })
                } else {
                    this.setState({
                        ...this.state,
                        field: this.state.field.map((item, i) => {
                            if (index === i) {
                                return {
                                    ...item, open: true
                                }
                            }
                            return item;
                        }),
                        turn: 0
                    })
                    this.timeout()
                }
                break
            default:
                break;
        }
    }

    render() {
        return  !this.props.isGameStarted
        ? <Redirect to='/' />
        : this.endGame
            ? <Redirect to='/stop' />
            : <Game field={this.state.field} openCard={this.openCard} timer={this.props.timer} />
    }
}