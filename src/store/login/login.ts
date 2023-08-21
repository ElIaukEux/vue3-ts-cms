import type { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccountType } from '@/service/login/type'
import LocalCatch from '@/utils/catch'
import makeRoute from '@/utils/makeRoute'
import router from '@/router'
import {
  accountLogin,
  accountGetInfo,
  accountGetMenu
} from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const makeRouteList = makeRoute(userMenus)

      makeRouteList.forEach((item) => {
        router.addRoute('main', item)
      })
      console.log(makeRouteList, 'zhegeliebiao----0890', router)
    }
  },
  actions: {
    async acccountLoginActions({ commit }, payload: IAccountType) {
      // 用户登录
      const res = await accountLogin(payload)
      console.log(res)
      if (res.code === 500) {
        return res
      } else {
        commit('changeToken', res.token)
        LocalCatch.setCache('token', res.token)
        console.log(res, 'zheshishenme ')

        // 获取用户信息
        const userInfoResult = await accountGetInfo()
        commit('changeUserInfo', userInfoResult.user)
        LocalCatch.setCache('userInfo', userInfoResult.user)

        // 获取菜单信息
        const menusList = await accountGetMenu()
        commit('changeUserMenus', menusList.data)
        LocalCatch.setCache('userMenus', menusList.data)

        router.push('/main')
      }
    },

    localLogin({ commit }) {
      const token = LocalCatch.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCatch.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = LocalCatch.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
