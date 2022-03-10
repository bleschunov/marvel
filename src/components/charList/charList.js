import { v4 } from 'uuid'

import './charList.scss'
import '../../styles/button.scss'

import abyss from '../../resources/images/abyss.png'

const CharList = ({className}) => {
    let cards = [
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
        {
            img: abyss,
            name: 'abyss',
            key: v4()
        },
    ]

    cards = cards.map(({img, name, key}) => {
        return (
            <div key={key} className="charList__card">
                <img src={img} alt={name} className="charList__avatar" />
                <h3 className="charList__header">{name}</h3>
            </div>
        )
    })

    

    return (
        <section className={`charList ${className}`}>
            <div className="charList__grid">
                {cards}
            </div>
            <div className="charList__footer">
                <button className="button button_red button_long charLis__button">load more</button>
            </div>
        </section>
    )
}

export default CharList