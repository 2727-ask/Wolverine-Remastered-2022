import { createStore } from 'vuex'
import doctors from './modules/doctors'
import auth from './modules/auth'
import facilities from './modules/facilities'
import newrecords from './modules/newrecords'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    doctors,
    auth,
    facilities,
    newrecords
  }
})
