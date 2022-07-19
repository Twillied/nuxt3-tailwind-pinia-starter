import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id: 'users-store',
  state: () => {
    return {
      usersList: ['Tim', 'Amanda', 'John', 'Jane'],
      count: 0,
    }
  },
  actions:{
    increment(){
      this.count++;
    }
  },
  getters: {
    usersAll: state => state.usersList,
  },
})
