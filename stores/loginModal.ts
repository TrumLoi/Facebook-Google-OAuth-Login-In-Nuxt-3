// @ts-nocheck
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useLoginModal = defineStore('loginModal', {
  state: () => ({
    isOpen: false,
    destination: "",
    inProgress: false,
    loginBy: '',
  }),
  getters: {
    isLogged(): boolean {
      return true;
    },
  },
  actions: {
    setDestination(destination: string) {
      this.destination = destination;
    },
    open(isOpen = true as boolean) {
      this.isOpen = isOpen;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginModal, import.meta.hot))
}
