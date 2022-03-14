import { Link } from 'react-router-dom'

import './page404.scss'

import Error from '../../error/error'

const Page404 = () => {
    return (
        <div className="page404">
            <Error className="page404__error" />
            <p className="page404__message">This page does not exist</p>
            <Link to="/marvel" className="page404__button">Go to homepage</Link>
        </div>
    )
}

export default Page404