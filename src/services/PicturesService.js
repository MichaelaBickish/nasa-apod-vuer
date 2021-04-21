import { AppState } from '../AppState'
import Picture from '../models/Picture'
import { nasaApi } from './AxiosService'

class PicturesService {
    async getPicture(date) {
        const res = await nasaApi.get('apod?api_key=SLmu4e8TKLVNAuQdg31twlJjBaGOcEnJh12UwWx5&date=', date)
        AppState.results = res.data.map(p => new Picture(p))
    }
}

export const picturesService = new PicturesService()