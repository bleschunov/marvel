import { Component, Children, cloneElement } from 'react'
import MarvelService from '../../services/marvelService'
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './charInfo.scss'
import '../../styles/button.scss'

class CharInfo extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.updateChar();
    }

    componentDidUpdate = prevProps => {
        if (this.props !== prevProps) {
            this.updateChar();
        }
    }

    onLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

    onLoaded = char => {
        this.setState({
            char,
            loading: false,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = id => {
        this.onLoading()

        const { selectedCharId } = this.props

        MarvelService
            .getCharacter(selectedCharId)
            .then(this.onLoaded)
            .catch(this.onError)
    }
    

    render() {
        const { className } = this.props
        const { char, loading, error } = this.state

        let content
        if (loading) {
            content = (<Spinner />)
        } else if (error) {
            content = (<Error />)
        } else {
            content = (<View char={char} />)
        }

        return (
            <section className={`charInfo ${className}`}>
                {content}
            </section>
        )
    }
}

const View = ({char: {name, thumbnail, description, homepage, wiki, comics, objectFit}}) => {
    let comicsItems = [];
    if (comics.length !== 0) {

        for (let i = 0; i < comics.length; i++) {
            if (i === 10) break 
            comicsItems.push(<li key={i}>{comics[i].name}</li>)
        }

    } else {
        comicsItems = <li>There are no comics with this character</li>
    }
    
    return (
        <>
            <img src={thumbnail} alt={name} className="charInfo__avatar" style={{ objectFit }} />
            <div className="charInfo__header">
                <h3 className="charInfo__name">{name}</h3>
                <a href={homepage} className="button button_red charInfo__button">homepage</a>
                <a href={wiki} className="button button_gray charInfo__button">wiki</a>    
            </div>
            <p className="charInfo__descr">{description}</p>
            <div className="charInfo__listHeader">Comics:</div>
            <ComicsList>
                {comicsItems}
            </ComicsList>
        </>
    )
}

const ComicsList = ({children}) => {
    return (
        <ul className="charInfo__list">
            {
                Children.map(children, child => {
                    return cloneElement(child, {className: "charInfo__item"})
                })
            }
        </ul>
    )
}

CharInfo.propTypes = {
    selectedCharId: PropTypes.number
}

export default CharInfo