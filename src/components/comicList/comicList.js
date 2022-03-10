import { v4 } from 'uuid'

import './comicList.scss'

import UW from '../../resources/images/UW.png'
import xMen from '../../resources/images/x-men.png'

const ComicList = ({className}) => {
    let comics = [
        {
            img: UW,
            header: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            isPriceAvaiable: true,
            price: 9.99
        },
        {
            img: xMen,
            header: 'X-Men: Days of Future Past',
            isPriceAvaiable: false,
            price: null
        },
        {
            img: UW,
            header: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            isPriceAvaiable: true,
            price: 9.99
        },
        {
            img: xMen,
            header: 'X-Men: Days of Future Past',
            isPriceAvaiable: false,
            price: null
        },
        {
            img: UW,
            header: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            isPriceAvaiable: true,
            price: 9.99
        },
        {
            img: xMen,
            header: 'X-Men: Days of Future Past',
            isPriceAvaiable: false,
            price: null
        },
        {
            img: UW,
            header: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
            isPriceAvaiable: true,
            price: 9.99
        }
    ]

    comics = comics.map(item => {
        const price = item.isPriceAvaiable ? `${item.price}$` : 'not available';
        
        return (
            <div key={ v4() } className="comicList__card">
                <img src={item.img} className="comicList__img" />
                <h3 className="comicList__header">{item.header}</h3>
                <div className="comicList__price">{price}</div>
            </div>
        )
    })

    return (
       <section className={`comicList ${className}`}>
           <div className="comicList__grid">
                {comics}
            </div>
            <div className="comicList__footer">
                <button className="button button_red button_long">load more</button>    
            </div>
        </section>
    )
}

export default ComicList