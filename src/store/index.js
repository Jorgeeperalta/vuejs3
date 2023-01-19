import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 , entries :[]}
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },

    search () {
       
        // Lazily load input items
        fetch('https://api.publicapis.org/entries')
          .then(res => res.json())
          .then(res => {
            const { count, entries } = res
            this.count = count
            this.entries = entries
            console.log(this.entries)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },

    

  },
})