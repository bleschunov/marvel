import md5 from 'md5'
import usehttp from '../hooks/http.hook'

const useMarvelService = () => {
    const {getResource, process} = usehttp()

    const 
        _apiBase = 'https://gateway.marvel.com:443/v1/public/',
        _apiPublicKey = '501c32c8096d96aabefe16305a1b4371',
        _apiPrivateKey = 'cf3a965c94a82a96ab36e31940ad7a43fba9af96',
        _ts = '1',
        _hash = md5(_ts + _apiPrivateKey + _apiPublicKey),
        _apiAuth = `?apikey=${_apiPublicKey}&ts=${_ts}&hash=${_hash}`

    async function getCharacter(id) {
        const res = await getResource(`${_apiBase}characters/${id + _apiAuth}`)
        return _transformChar(res.data.results[0])
    }

    async function getCharacterByName(name) {
        const res = await getResource(`${_apiBase}characters?name=${name}&apikey=${_apiPublicKey}`)
        if (res.data.results[0]) return _transformChar(res.data.results[0])
        else throw new Error()
    }

    async function getRandomCharacter() {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        try {
            const res = await getResource(`${_apiBase}characters/${id + _apiAuth}`)

            if (res.code === 404) {
                throw new Error(`The character with id ${id} does not exist`)
            }

            return _transformChar(res.data.results[0])
        } catch (error) {
            return await getRandomCharacter()
        }
    }

    async function getCharacters(number, offset) {
        const res = await getResource(`${_apiBase}characters${_apiAuth}&limit=${number}&offset=${offset}`)
        return res.data.results.map(char => _transformChar(char))
    }

    async function getComic(id) {
        const res = await getResource(`${_apiBase}comics/${id + _apiAuth}`)
        return _transformComic(res.data.results[0])
    }

    async function getComics(number, offset) {
        const res = await getResource(`${_apiBase}comics${_apiAuth}&limit=${number}&offset=${offset}`)
        return res.data.results.map(comic => _transformComic(comic))
    }

    function _transformChar({id, name, description, thumbnail, urls, comics}) {
        description = description.length > 230 ? description.slice(0, 228) + '...' : description
        
        return {
            id: String(id),
            name,
            description: description ? description : 'Description is not available :(',
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            homepage: urls[0].url,
            wiki: urls[0].url,
            comics: comics.items
        }
    }

    function _transformComic({id, title, prices, thumbnail, description, textObjects, pageCount}) {
        return {
            id: String(id),
            price: prices[0].price + '$',
            description: description ? description : 'Description is not available :(',
            language: textObjects.language ? 'Language: ' + textObjects.language : null,
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            title,
            pageCount: pageCount ? pageCount + ' pages' : null
        }
    }

    return {
        process,
        getCharacter, 
        getCharacterByName,
        getRandomCharacter, 
        getCharacters, 
        getComic,
        getComics
    }
}

export default useMarvelService