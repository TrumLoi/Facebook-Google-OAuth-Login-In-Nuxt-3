// @ts-nocheck
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAuthUser = defineStore('authUser', {
  state: () => ({
    user: null,
    inProgress: false,
    loginBy: '',
  }),
  getters: {
    isAuthenticated(): boolean {
      return this.user !== null;
    },
  },
  actions: {
    setFullPathTo(fullPath: string) {
      // this.fullPathTo = fullPath;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthUser, import.meta.hot))
}
