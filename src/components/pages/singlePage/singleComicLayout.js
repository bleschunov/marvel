import './layout.scss'

const SingleComicLayout = ({char, navigate, className}) => {
    return (
        <section className={`layout ${className}`}>
            <div className="layout__grid">
                <img src={char.thumbnail} alt={char.title} className="layout__img" />
                <div className="layout__info">
                    <h3 className="layout__header">{char.title}</h3>
                    <p className="layout__descr">{char.description}</p>
                    <div className="layout__pages">{char.pageCount}</div>
                    <div className="layout__lang">{char.language}</div>
                    <div className="layout__price">{char.price}</div>
                </div>
                <button onClick={() => navigate(-1)} className="layout__button">Back</button>
            </div>
        </section>
    )
}

export default SingleComicLayout