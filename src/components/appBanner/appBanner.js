import './appBanner.scss'

import avengers from '../../resources/images/avengers.png'
import avengersLogo from '../../resources/images/avengersLogo.png'

const AppBanner = ({className}) => {
    return (
        <section className={`appBanner ${className}`}>
            <div className="appBanner__flex">
                <img src={avengers} alt="avengers" className="appBanner__avengers" />
                <h2 className="appBanner__header">
                    New comics every week! <br />
                    Stay tuned!
                </h2>
                <img src={avengersLogo} alt="avengers logo" className="appBanner__avengersLogo" />    
            </div>
        </section>
    )
}

export default AppBanner