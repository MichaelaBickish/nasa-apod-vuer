import { AppState } from '../AppState'
import Picture from '../models/Picture'
import { nasaApi } from './AxiosService'

class PicturesService {
    async getPicture(query) {
        const res = await nasaApi.get(query)
        AppState.results = res.data.map(p => new Picture(p))
    }
}

export const picturesService = new PicturesService()