import axios from 'axios'
import cookie from 'cookie'
import { defineStore } from 'pinia'

export const useOauthStore = defineStore({
  id: 'oauth',
  state: () => {
    return {
      access_token: null,
      loading: false,
      error_message: [],
    }
  },
  getters: {},
  actions: {
    signin(payload) {
      return axios
        .post(`/api-web/oauth/sign_in`, payload)
        .then((res) => {
          const token = res.data.data.user.access_token
          document.cookie = cookie.serialize('access_token', token)
          this.access_token = token
          return token
        })
        .catch((err) => {
          console.error('Error', err.response)
          this.error_message = [...err.response.data.error.errors]
        })
        .finally(() => {
          this.loading = false
        })
    },
    signout() {
      document.cookie = cookie.serialize('access_token', null)
      return true
    },
  },
})
