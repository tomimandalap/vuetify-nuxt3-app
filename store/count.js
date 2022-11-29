import { defineStore } from 'pinia'

export const useCountStore = defineStore({
  id: 'count',
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {},
  actions: {
    decrement() {
      this.count -= 1
    },
    increment() {
      this.count += 1
    },
  },
})
