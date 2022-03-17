import { Link, NavLink } from 'react-router-dom'

import './appHeader.scss'

const AppHeader = ({className}) => {
    return (
        <header className={`header ${className}`}>
            
            <h1 className="header__header">
                <Link to="/marvel/characters">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <ul className="header__nav">
                <li className="header__item">
                    <NavLink 
                        to="/marvel/characters" 
                        style={({ isActive }) => isActive ? {color: '#9F0013'} : {color: 'inherit'}}>
                        Characters
                    </NavLink>
                </li>
                /
                <li className="header__item">
                    <NavLink  
                        to="/marvel/comics" 
                        style={({ isActive }) => isActive ? {color: '#9F0013'} : {color: 'inherit'}}>
                        Comics
                    </NavLink>
                </li>
            </ul>
            
        </header>
    )
}

export default AppHeader