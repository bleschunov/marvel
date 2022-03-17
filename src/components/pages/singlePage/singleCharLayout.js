import './layout.scss'

const SingleCharLayout = ({char, navigate, className}) => {
    return (
        <section className={`layout ${className}`}>
            <div className="layout__grid">
                <img src={char.thumbnail} alt={char.name} className="layout__img" />
                <div className="layout__info">
                    <h3 className="layout__header">{char.name}</h3>
                    <p className="layout__descr">{char.description}</p>
                </div>
                <button onClick={() => navigate(-1)} className="layout__button">Back</button>
            </div>
        </section>
    )
}


export default SingleCharLayout