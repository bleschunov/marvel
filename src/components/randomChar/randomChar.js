import { useState, useEffect } from 'react'
import useMarvelService from '../../services/marvelService'

import getContent from '../../utils/getContent'

import './randomChar.scss'
import '../../styles/button.scss'

const RandomChar = props => {
    const [char, setChar] = useState({})
    
    const {process, getRandomCharacter} = useMarvelService()

    useEffect(updateChar, [])

    async function updateChar() {
        setChar( await getRandomCharacter() )
    }

    const View = ({name, thumbnail, objectFit, description, homepage, wiki}) => {
        return (
            <>
                <img src={thumbnail} alt={name} className="randomChar__avatar" style={{ objectFit }} />
                <div className="randomChar__info"> 
                    <h2 className="randomChar__header">{name}</h2>
                    <p className="randomChar__text">{description}</p>
                    <div className="randomChar__buttonGroup">
                        <a href={homepage} className="button button_red">homepage</a>
                        <a href={wiki} className="button button_gray">wiki</a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={`randomChar ${props.className}`}>
            <div className="randomChar__container randomChar__container_light randomChar__container_first">
                {getContent(process, View, char)}
            </div>
            <div className="randomChar__container randomChar__container_dark randomChar__container_second">
                <div>
                    <h2 className="randomChar__title">Random character for today!</h2>
                    <h2 className="randomChar__title">Do you want to get to know him better?</h2>
                </div>
                <h2 className="randomChar__title">Or choose another one</h2>
                <button onClick={updateChar} className="button button_red">try it</button>
            </div>
        </div>
    )
    
}

export default RandomChar