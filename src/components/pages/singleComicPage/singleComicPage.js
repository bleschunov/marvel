import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMarvelService from '../../../services/marvelService'

import './singleComicPage.scss'

import Error from '../../error/error'
import Spinner from '../../spinner/spinner'

const SingleComic = ({className}) => {
    const [comic, setComic] = useState(false)
    const 
        navigate = useNavigate(),
        { id } = useParams(),
        {loading, error, getComic} = useMarvelService()

    

    useEffect(async () => updateComic(id), [])

    async function updateComic(id) {
        setComic( await getComic(id) )
    }

    function renderView({title, thumbnail, description, price, pageCount, language}) {

        if (loading) return <Spinner />
        else if (error) return <Error />
        else {
            const style = { objectFit: null }
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style.objectFit = 'contain'
            } else {
                style.objectFit = 'cover'
            }

            return (
                <>
                    <img src={thumbnail} alt={title} style={style} className="comicPage__img" />
                    <div className="comicPage__info">
                        <h3 className="comicPage__header">{title}</h3>
                        <p className="comicPage__descr">{description}</p>
                        <div className="comicPage__pages">{pageCount}</div>
                        <div className="comicPage__lang">{language}</div>
                        <div className="comicPage__price">{price}</div>
                    </div>
                </>
            )
        }
    }

    return (
        <section className={`comicPage ${className}`}>
            <div className="comicPage__grid">
                {renderView(comic)}
                <button onClick={() => navigate(-1)} className="comicPage__button">Back</button>
            </div>
        </section>
    )
}

export default SingleComic