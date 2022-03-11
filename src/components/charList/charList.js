import { Component, createRef } from 'react'
import MarvelService from '../../services/marvelService'
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './charList.scss'
import '../../styles/button.scss'

class CharList extends Component {
    state = {
        chars: [],
        offset: 500,
        loading: true,
        error: false,
        isEnd: false
    }

    componentDidMount = () => {
        this.loadChars(9)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.isPageBottom)
    }

    onFocus = () => {

    }

    isPageBottom = () => {
        const pageYOffset = window.pageYOffset,
              clientHeight = document.documentElement.clientHeight,
              scrollHeight = document.documentElement.scrollHeight

        if (pageYOffset + clientHeight - scrollHeight === 0) {
            this.onGetPageBottom()
        }
    }

    onGetPageBottom = () => {
        window.removeEventListener('scroll', this.isPageBottom)
        this.loadChars(9)
    }

    onLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

    onLoaded = (chars, number) => {
        this.setState(state => ({
            chars: [...state.chars, ...chars],
            offset: state.offset + number,
            loading: false,
            error: false,
            isEnd: chars.length < 9
        }))
        window.addEventListener('scroll', this.isPageBottom)
    }

    onError = error => {
        console.log(error)
        this.setState(() => ({
            loading: false,
            error: true
        }))
    }

    loadChars = number => {
        this.onLoading();

        const offset = this.state.offset

        MarvelService
            .getCharacters(number, offset)
            .then(char => this.onLoaded(char, number))
            .catch(this.onError)
    }

    render() {
        const { className, onSelectChar } = this.props
        const { chars, loading, error } = this.state

        let process = null
        if (loading) {
            process = (<Spinner />)
        } else if (error) {
            process = (<Error />)
        } else if (!this.state.isEnd) {
            process = (
                <button 
                    onClick={() => this.loadChars(9)} 
                    className="button button_red button_long">
                    load more
                </button>
            )
        }

        const cards = chars.map(char => {
            if (char.objectFit !== 'contain') {
                return <Card char={char} key={char.id} onSelectChar={onSelectChar} />
            }
            // return (<Card char={char} key={char.id} onSelectChar={onSelectChar} />)
        })

        return (
            <section className={`charList ${className}`}>
                <ul className="charList__grid">
                    {cards}
                </ul>
                <div className="charList__footer">
                    {process}
                </div>
            </section>
        )
    }
}

class Card extends Component {
    ref = createRef()

    componentDidMount = () => {
        this.ref.current.addEventListener('focus', this.onFocus)
        this.ref.current.addEventListener('blur', this.onBlur)
    }

    componentWillUnmount = () => {
        this.ref.current.removeEventListener('focus', this.onFocus)
        this.ref.current.removeEventListener('blur', this.onBlur)
    }

    onFocus = () => {
        this.ref.current.classList.add('charList__card_selected')
    }

    onBlur = () => {
        this.ref.current.classList.remove('charList__card_selected')
    }

    onSelectChar = id => {
        const { onSelectChar } = this.props

        
        this.ref.current.focus()
        

        onSelectChar(id)
    }

    render() {
        const {char: {id, thumbnail, name, objectFit}} = this.props

        return (
            <li
                tabindex="0"
                onClick={() => this.onSelectChar(id)} 
                className="charList__card" 
                ref={this.ref} >
                <img 
                    src={thumbnail} 
                    alt={name} 
                    className="charList__avatar" 
                    style={{ objectFit }} />
                <h3 className="charList__header">{name}</h3>
            </li>    
        )
    }
}

CharList.propTypes = {
    onSelectChar: PropTypes.func
}

export default CharList