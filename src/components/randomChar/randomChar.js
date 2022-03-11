import { Component } from 'react'
import MarvelService from '../../services/marvelService'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './randomChar.scss'
import '../../styles/button.scss'

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.updateChar();
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

    updateChar = () => {
        this.onLoading()

        MarvelService
            .getRandomCharacter()
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
            <div className={`randomChar ${className}`}>
                <div className="randomChar__container randomChar__container_light randomChar__container_first">
                    { content }
                </div>
                <div className="randomChar__container randomChar__container_dark randomChar__container_second">
                    <div>
                        <h2 className="randomChar__title">Random character for today!</h2>
                        <h2 className="randomChar__title">Do you want to get to know him better?</h2>
                    </div>
                    <h2 className="randomChar__title">Or choose another one</h2>
                    <button onClick={this.updateChar} className="button button_red">try it</button>
                </div>
            </div>
        )
    }
}

const View = ({char: { name, thumbnail, objectFit, description, homepage, wiki }}) => {
    return (
        <>
            <img src={thumbnail} alt={name} className="randomChar__avatar" style={{ objectFit }} />
            <div className="randomChar__info"> 
                <h2 className="randomChar__header">{name}</h2>
                <p className="randomChar__text">{description}</p>
                <div className="randomChar__buttonGroup">
                    <a href={homepage} className="button button_red">homepage</a>
                    <a href={wiki} className="button button_gray">wiki</a>
                </div>
            </div>
        </>
    )
}

export default RandomChar