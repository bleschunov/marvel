import './appHeader.scss'

const AppHeader = ({className}) => {
    return (
        <header className={`header ${className}`}>
            <h1 className="header__header">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <ul className="header__nav">
                <li className="header__item header__item_active"><a href="#">Characters</a></li>
                /
                <li className="header__item"><a href="#">Comics</a></li>
            </ul>
        </header>
    )
}

export default AppHeader