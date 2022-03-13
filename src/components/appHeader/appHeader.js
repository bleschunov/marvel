import { Link, NavLink } from 'react-router-dom'
import './appHeader.scss'

const AppHeader = ({className}) => {
    return (
        <header className={`header ${className}`}>
            
            <h1 className="header__header">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <ul className="header__nav">
                <li className="header__item">
                    <NavLink exact to="/" activeClassName="header__item_active">Characters</NavLink>
                </li>
                /
                <li className="header__item">
                    <NavLink exact to="/comics" activeClassName="header__item_active">Comics</NavLink>
                </li>
            </ul>
            
        </header>
    )
}

export default AppHeader