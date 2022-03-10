import { v4 } from 'uuid';

import './charInfo.scss'
import '../../styles/button.scss'

import loki from '../../resources/images/loki.png'

const CharInfo = ({className}) => {
    const data = {
        img: loki,
        name: 'loki',
        descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
        comics: [
            'All-Winners Squad: Band of Heroes (2011) #3',
            'Alpha Flight (1983) #50',
            'Amazing Spider-Man (1999) #503',
            'Amazing Spider-Man (1999) #504',
            'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)',
            'Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)',
            'Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)',
            'Vengeance (2011) #4',
            'Avengers (1963) #1',
            'Avengers (1996) #1'
        ]
    }

    const comics = data.comics.map(item => {
        return (
            <li key={ v4() } className="charInfo__item">{item}</li>
        )
    })

    return (
        <section className={`charInfo ${className}`}>
            <img src={data.img} alt={data.name} className="charInfo__avatar" />
            <div className="charInfo__header">
                <h3 className="charInfo__name">{data.name}</h3>
                <button className="button button_red charInfo__button">homepage</button>
                <button className="button button_gray charInfo__button">wiki</button>    
            </div>
            <p className="charInfo__descr">{data.descr}</p>
            <ul className="charInfo__list">
                {comics}
            </ul>    
        </section>
    )
}

export default CharInfo