import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useMarvelService from '../../services/marvelService'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './comicList.scss'
import '../../styles/button.scss'

const ComicList = props => {
    const 
        [comics, setComics] = useState([]),
        [offset, setOffset] = useState(1000),
        [isEnd, setIsEnd] = useState(false)

    const {loading, error, getComics} = useMarvelService()

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
                <li 
                    key={id} 
                    tabIndex='0'
                    className="comicList__card">
                    <Link to={`${id}`}>
                        <img src={thumbnail} className="comicList__img" />
                        <h3 className="comicList__header">{title}</h3>
                        <div className="comicList__price">{price}</div>
                    </Link>
                </li>
            )
        })
    }

    function renderFooter() {
        if (loading) return <Spinner />
        else if (error) return <Error />
        else if (!isEnd) return (
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
                {renderCards(comics)}
            </div>
            <div className="comicList__footer">
                {renderFooter()}
            </div>
        </section>
    )
}

export default ComicList