import { createStore, useStore as vuexUseStore, Store } from 'vuex'
import login from './login/login'
import { IStoreType } from './type'

const store = createStore({
  state: () => {
    return {
      name: 'XueWen',
      age: 27
    }
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/localLogin')
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}
export default store
