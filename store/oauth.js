import axios from 'axios'
import { defineStore } from 'pinia'

export const useOauthStore = defineStore({
  id: 'oauth',
  state: () => {
    return {
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
          return res.data
        })
        .catch((err) => {
          console.error('Error', err.response)
          this.error_message = [...err.response.data.error.errors]
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
})
