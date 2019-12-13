// 地图
const state={
    nowLeftState:'SideTopo',
    checkoutStatus:null
}
const getters={
    showLeftState:(state)=>{
        return state.nowLeftState
    }
}
const actions={
    changeLeftClickIndex({ commit  },leftState){
        commit('changeLeftClickIndex',leftState)
    }
}
const mutations={
    changeLeftClickIndex(state,status){
        state.nowLeftState=status
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}