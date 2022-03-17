import Helmet from 'react-helmet'

import './layout.scss'

const SingledataLayout = ({data, navigate, className}) => {
    return (
        <section className={`layout ${className}`}>
            <Helmet>
            <meta
                name="description"
                content={`${data.name} page`} />
                <title>{data.name}</title>
            </Helmet>
            <div className="layout__grid">
                <img src={data.thumbnail} alt={data.name} className="layout__img" />
                <div className="layout__info">
                    <h3 className="layout__header">{data.name}</h3>
                    <p className="layout__descr">{data.description}</p>
                </div>
                <button onClick={() => navigate(-1)} className="layout__button">Back</button>
            </div>
        </section>
    )
}


export default SingledataLayout