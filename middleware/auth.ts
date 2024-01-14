export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on server
  if (process.server)  {
    return;
  }
  
  const authUser = useAuthUser();
  const loginModal = useLoginModal();
  if (!authUser.isAuthenticated) {
    if (to.name !== 'login') {
      loginModal.setDestination(to.fullPath);
    }
    loginModal.open();
    if (from.fullPath === to.fullPath) {
      return navigateTo({ name: 'index' });
    } else {
      return abortNavigation();
    }
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return;
  } else {
    return abortNavigation();
  }
})
