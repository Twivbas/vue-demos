// vuex的核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
  // 初始化状态
  count: 0
}

// 包含多个更新state函数的对象
const mutations = {
  INCREMENT (state) {
    state.count += 1
  },
  DECREMENT (state) {
    state.count -= 1
  }
}

// 包含多个对应事件回调函数的对象
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  // 异步的action
  incrementAsync ({commit}) {
    // 在action中直接就可以执行异步代码·
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含多个getter计算属性函数的对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
