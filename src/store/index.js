import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 , entries :[], items: [], arr: [] };
  },
 
  actions: {
    increment() {
      this.count++
    },
    monedas (){
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(res => {
        //   this.items = res
        
        // })
        // .catch(err => {
        //   console.log(err)
        // })

  

var requestOptions = {
  method: 'GET',
  
 
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then(response => response.json())
  .then(result =>this.items =result)
  .catch(error => console.log('error', error));
    },
    selecciona (){
        this.items.forEach (item =>{
            this.arr.push(item.title)
           
        }
            )
         
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