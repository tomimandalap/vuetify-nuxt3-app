import { useOauthStore } from '~/store/oauth'

export default defineNuxtRouteMiddleware((payload) => {
  const oauthStore = useOauthStore()
  const isToken = useCookie('access_token')

  const { path } = payload
  const access_token = oauthStore.access_token || isToken.value || null

  if (access_token) {
    console.log('Accessed runtime config within middleware.')
    return true
  }

  return navigateTo('admin/sign-in')
})
