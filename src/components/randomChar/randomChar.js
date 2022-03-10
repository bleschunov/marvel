import './randomChar.scss'
import '../../styles/button.scss'

import thor from '../../resources/images/thor.png'

const RandomChar = ({className}) => {
    return (
        <div className={`randomChar ${className}`}>
            <div className="randomChar__container randomChar__container_light randomChar__container_first">
                <img src={thor} alt="thor" className="randomChar__avatar" />
                <div className="randomChar__info"> 
                    <h2 className="randomChar__header">Thor</h2>
                    <p className="randomChar__text">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                    <div className="randomChar__buttonGroup">
                        <button className="button button_red">homepage</button>
                        <button className="button button_gray">wiki</button>
                    </div>
                </div>
            </div>
            <div className="randomChar__container randomChar__container_dark randomChar__container_second">
                <div>
                    <h2 className="randomChar__title">Random character for today!</h2>
                    <h2 className="randomChar__title">Do you want to get to know him better?</h2>
                </div>
                <h2 className="randomChar__title">Or choose another one</h2>
                <button className="button button_red">try it</button>
            </div>
        </div>
    )
}

export default RandomChar