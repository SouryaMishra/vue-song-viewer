import api from '@/services/api'

export const register = (credentials) => {
  return api().post('register', credentials)
}
