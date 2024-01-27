import api from '@/services/api'

export const register = (credentials) => api.post('register', credentials)

export const login = (credentials) => api.post('login', credentials)
