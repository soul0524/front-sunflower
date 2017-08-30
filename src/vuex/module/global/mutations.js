const mutations = {
  // 切换左侧导航的显示状态
  updateLoading (state, loading) {
    state.loading = loading
  },
  updateDirection (state, direction) {
    state.direction = direction
  },
  updateUser (state, user) {
    state.user = user
  }
}
export default mutations
