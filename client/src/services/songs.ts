import api from '@/services/api'

export const getAll = () => api.get('/songs')

export const create = (songData) => api.post('/song', songData)
