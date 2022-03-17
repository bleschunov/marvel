import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import useMarvelService from '../../services/marvelService'

import getContent from '../../utils/getContent'

import './comicList.scss'
import '../../styles/button.scss'

const ComicList = props => {
    const 
        [comics, setComics] = useState([]),
        [offset, setOffset] = useState(1000),
        [isEnd, setIsEnd] = useState(false)

    const {process, getComics} = useMarvelService()

    useEffect(() => loadComics(8), [])

    function onLoaded(newComics, number) {
        setComics(comics => [...comics, ...newComics])
        setOffset(offset => offset + number)
        setIsEnd(newComics.length < 8)
    }

    function loadComics(number) {
        getComics(number, offset)
            .then(comics => onLoaded(comics, number))
    }

    function renderCards(comics) {
        return comics.map(item => {
            const {id, price, thumbnail, title} = item

            return (
                <CSSTransition 
                    key={id} 
                    timeout={500} 
                    classNames="comicList__card">
                    <li 
                        tabIndex='0'
                        className="comicList__card">
                        <Link to={`${id}`}>
                            <img src={thumbnail} className="comicList__img" alt={title} />
                            <h3 className="comicList__header">{title}</h3>
                            <div className="comicList__price">{price}</div>
                        </Link>
                    </li>
                </CSSTransition>
            )
        })
    }

    const Footer = () => {
        if (isEnd) return null
        else return (
            <button 
                onClick={() => loadComics(8)} 
                className="button button_red button_long">
                load more
            </button>
        )
    }

    return (
       <section className={`comicList ${props.className}`}>
           <div className="comicList__grid">
                <TransitionGroup component={null}>
                    {renderCards(comics)}
                </TransitionGroup>
            </div>
            <div className="comicList__footer">
                {getContent(process, Footer)}
            </div>
        </section>
    )
}

export default ComicList