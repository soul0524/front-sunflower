import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  loading: false,
  direction: 'forward',
  user: null
}

export default{
  state,
  actions,
  getters,
  mutations
}
