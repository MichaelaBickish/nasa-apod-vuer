import axios from 'axios'

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=SLmu4e8TKLVNAuQdg31twlJjBaGOcEnJh12UwWx5',
    timeout: 5000
})