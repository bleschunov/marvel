import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import './page404.scss'

import Error from '../../error/error'

const Page404 = () => {
    return (
        <div className="page404">
            <Helmet>
            <meta
                name="description"
                content="Page 404" />
                <title>This page does not exist :(</title>
            </Helmet>
            <Error className="page404__error" />
            <p className="page404__message">This page does not exist</p>
            <Link to="/marvel/characters" className="page404__button">Go to homepage</Link>
        </div>
    )
}

export default Page404