import md5 from 'md5'

class MarvelService {
    static _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    static _apiPublicKey = '501c32c8096d96aabefe16305a1b4371'
    static _apiPrivateKey = 'cf3a965c94a82a96ab36e31940ad7a43fba9af96'
    static _ts = '1'
    static _hash = md5(this._ts + this._apiPrivateKey + this._apiPublicKey);
    static _apiAuth = `?apikey=${this._apiPublicKey}&ts=${this._ts}&hash=${this._hash}`
    
    
    static getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status is ${res.status}`)
        }

        return await res.json();
    }

    static getCharacter = async id => {
        const res = await this.getResource(`${this._apiBase}characters/${id + this._apiAuth}`)
        return this._transformChar(res.data.results[0])
    }

    static getRandomCharacter = async () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        return this.getCharacter(id);
    }

    static getCharacters = async (number, offset) => {
        const res = await this.getResource(`${this._apiBase}characters${this._apiAuth}&limit=${number}&offset=${offset}`)
        return res.data.results.map(char => this._transformChar(char))
    }

    static _transformChar = ({id, name, description, thumbnail, urls, comics}) => {
        description = description.length > 230 ? description.slice(0, 228) + '...' : description
        const objectFit = /image_not_available$/.test(thumbnail.path) ? 'contain' : 'cover'
        
        return {
            id,
            name,
            description: description ? description : 'Description is not available :(',
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            objectFit,
            homepage: urls[0].url,
            wiki: urls[0].url,
            comics: comics.items
        }
    }
}

export default MarvelService