import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { getItem, setItem } from '@/utils/storage';
import { IUserInfo } from '@/api/types/common'

const state = {
  isCollapse: false,
  user: getItem<IUserInfo & { token: string }>('user')
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store =  createStore({
  state,
  getters: {
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
      setItem('user', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
