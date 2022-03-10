import './comicPage.scss'

import xMen from '../../resources/images/x-men.png'

const ComicPage = ({}) => {
    return (
        <section className="comicPage">
            <div className="comicPage__grid">
                <img src={xMen} alt="x-men" className="comicPage__img" />
                <div className="comicPage__info">
                    <h3 className="comicPage__header">X-Men: Days of Future Past</h3>
                    <p className="comicPage__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                    <div className="comicPage__pages">144 pages</div>
                    <div className="comicPage__lang">Language: en-us</div>
                    <div className="comicPage__price">9.99$</div>
                </div>
                <a href="#" className="comicPage__button">Back to all</a>
            </div>
        </section>
    )
}

export default ComicPage