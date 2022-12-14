import { useOauthStore } from '~/store/oauth'

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    (to, from) => {
      const oauthStore = useOauthStore()
      const route = to?.name || null
      const isToken = useCookie('access_token')
      const access_token = oauthStore.access_token || isToken.value

      const isAdmin = route.includes('admin')
      const isSignIn = route.includes('sign-in')

      if (isAdmin) {
        if (access_token) return true
        else return navigateTo('sign-in')
      } else if (isSignIn) {
        if (access_token) return navigateTo('/admin')
        else return true
      } else return true
    },
    { global: true },
  )
})
