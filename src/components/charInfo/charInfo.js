import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useMarvelService from '../../services/marvelService'
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './charInfo.scss'
import '../../styles/button.scss'

const CharInfo = (props) => {
    const [char, setChar] = useState(false)

    const {loading, error, getCharacter} = useMarvelService()

    useEffect(async () => updateChar(props.selectedCharId), [props.selectedCharId])

    async function updateChar(id) {
        setChar( await getCharacter(id) )
    }

    function renderView({name, thumbnail, description, homepage, wiki, comics}) {
        if (loading) return <Spinner />
        else if (error) return <Error />
        else {
            let comicsItems = [];
            if (comics.length !== 0) {

                for (let i = 0; i < comics.length; i++) {
                    if (i === 10) break 

                    const comicId = comics[i].resourceURI.match(/\d+$/)

                    comicsItems.push((
                        <li key={i} className="charInfo__item">
                            <Link to={`comics/${comicId}`}>
                                {comics[i].name}
                            </Link>
                        </li>
                    ))
                }

            } else {
                comicsItems = <li>There are no comics with this character</li>
            }

            const style = { objectFit: null }
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style.objectFit = 'contain'
            } else {
                style.objectFit = 'cover'
            }

            return (
                <>
                    <img src={thumbnail} alt={name} style={{style}} className="charInfo__avatar" />
                    <div className="charInfo__header">
                        <h3 className="charInfo__name">{name}</h3>
                        <a href={homepage} className="button button_red charInfo__button">homepage</a>
                        <a href={wiki} className="button button_gray charInfo__button">wiki</a>    
                    </div>
                    <p className="charInfo__descr">{description}</p>
                    <div className="charInfo__listHeader">Comics:</div>
                    <ul className="charInfo__list">
                        {comicsItems}
                    </ul>
                </>
            )
        }
    }

    return (
        <section className={`charInfo ${props.className}`}>
            {char ? renderView(char) : null}
        </section>
    )
}

CharInfo.propTypes = {
    selectedCharId: PropTypes.number
}

export default CharInfo