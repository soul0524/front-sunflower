export const changeLoading = ({commit}, loading) => {
  commit('updateLoading', loading)
}

export const changeDirection = ({commit}, direction) => {
  commit('updateDirection', direction)
}

export const changeUser = ({commit}, user) => {
  commit('updateUser', user)
}
