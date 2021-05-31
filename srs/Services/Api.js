import {create} from 'apisauce'

const api = create({
    baseURL: 'https://itunes.apple.com/search?term=',
  })
class Api {

    retriveMusic(artist_name) {
        return api.get(artist_name);
    }

  
}

export default new Api();