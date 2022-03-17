import { useState, useEffect, useRef, useMemo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useMarvelService from '../../services/marvelService'
import PropTypes from 'prop-types'

import getContent from '../../utils/getContent'

import './charList.scss'
import '../../styles/button.scss'

const CharList = props => {
    const
        [chars, setChars] = useState([]),
        [offset, setOffset] = useState(500),
        [isEnd, setIsEnd] = useState(false)
    
    const {process, getCharacters} = useMarvelService()

    useEffect(() => loadChars(9), [])

    function onLoaded(newChars, number) {
        setChars(chars => [...chars, ...newChars])
        setOffset(offset => offset + number)
        setIsEnd(newChars.length < 9)
    }

    function loadChars(number) {
        getCharacters(number, offset)
            .then(chars => onLoaded(chars, number))
    }

    const cards = useRef([])

    function onSelectChar(index) {
        cards.current.forEach(card => card.classList.remove('charList__card_selected'))
        cards.current[index].classList.add('charList__card_selected')
    }

    function renderCards(chars) {
        return chars.map((char, index) => {
            const {id, thumbnail, name} = char
            
            const style = { objectFit: null }
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style.objectFit = 'contain'
            } else {
                style.objectFit = 'cover'
            }

            return (
                <CSSTransition
                    timeout={500}
                    classNames="charList__card"
                    key={id} >
                    <li
                        tabIndex="0"
                        onClick={() => {
                            onSelectChar(index)
                            props.onSelectChar(id)
                        }}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                onSelectChar(index)
                                props.onSelectChar(id)
                            }
                        }} 
                        className="charList__card" 
                        ref={elem => cards.current[index] = elem} >
                        <img 
                            src={thumbnail} 
                            alt={name} 
                            className="charList__avatar" 
                            style={style} />
                        <h3 className="charList__header">{name}</h3>
                    </li>  
                </CSSTransition>  
            )
        })
    }

    const Footer = () => {
        if (isEnd) return null
        else return (
            <button 
                onClick={() => loadChars(9)} 
                className="button button_red button_long">
                load more
            </button>
        )
    }

    const renderedCards = useMemo(() => renderCards(chars), [chars])

    return (
        <section className={`charList ${props.className}`}>
            <ul className="charList__grid">
                <TransitionGroup component={null}>
                    {renderedCards}
                </TransitionGroup>
            </ul>
            <div className="charList__footer">
                {getContent(process, Footer)}
            </div>
        </section>
    )
    
}

CharList.propTypes = {
    onSelectChar: PropTypes.func
}

export default CharList