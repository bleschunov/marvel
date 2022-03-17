import Helmet from 'react-helmet'

import './layout.scss'

const SingledataLayout = ({data, navigate, className}) => {
    return (
        <section className={`layout ${className}`}>
            <Helmet>
            <meta
                name="description"
                content={`${data.title} page`} />
                <title>{data.title}</title>
            </Helmet>
            <div className="layout__grid">
                <img src={data.thumbnail} alt={data.title} className="layout__img" />
                <div className="layout__info">
                    <h3 className="layout__header">{data.title}</h3>
                    <p className="layout__descr">{data.description}</p>
                    <div className="layout__pages">{data.pageCount}</div>
                    <div className="layout__lang">{data.language}</div>
                    <div className="layout__price">{data.price}</div>
                </div>
                <button onClick={() => navigate(-1)} className="layout__button">Back</button>
            </div>
        </section>
    )
}

export default SingledataLayout