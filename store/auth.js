import Cookie from 'js-cookie' // libreria para manejo de cookies
import { auth, db } from '@/plugins/firebase'
import { success, error } from '../plugins/swal' // plugin de notificaciones

// estado de la aplicacion
export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  currentUser: state => state.user
}

// mutaciones de el estado (cambios de estado sincronos invocados por acciones)
export const mutations = {
  setToken: (state, token) => (state.token = token),
  clearToken: state => (state.token = null),
  setUser: (state, user) => (state.user = user),
  clearUser: state => (state.user = null)
}

// acciones para ejecutar codigo asyncrono e invocar mutaciones de estado
export const actions = {
  // Inicializando la autenticacion, verificamos existencia de token no caducado
  initAuth({ commit }, req) {
    // se inician las variables vacias para que el compilador no se queje
    let token
    let userId
    // se verifica si la accion esta corriendo en el servidor o en el cliente
    if (req) {
      // se verifica si no hay headers con cookies
      if (!req.headers.cookie) {
        return // en el caso que no hayan cookies, la funcion termina
      }
      // en caso que hayan cookies en los headers, asignarlos a jwtCookie
      const jwtCookie = req.headers.cookie
        .split(`;`)
        .find(c => c.trim().startsWith('idToken='))
      if (!jwtCookie) {
        return // si jwtCookie es null o undefined la funcion termina
      }
      // asignar el tiempo de expiracion
      // tomar el token desde el cookie
      token = jwtCookie.split('=')[1]
      userId = req.headers.cookie
        .split(`;`)
        .find(c => c.trim().startsWith('idUser='))
        .split(`=`)[1]
    } else {
      // tomar el token del storage del navegador
      token = localStorage.getItem('idToken')
      userId = localStorage.getItem('idUser')
    }
    db.collection('users')
      .doc(`${userId}`)
      .get()
      .then(res => {
        const newUser = {
          id: res.id,
          name: res.data().name,
          email: res.data().email,
          photoUrl: res.data().photoUrl,
          isAdmin: res.data().isAdmin,
          isDoctor: res.data().isDoctor,
          doctorId: res.data().doctorId
        }
        commit('setUser', newUser)
        commit('setToken', token)
      })
      .catch(err => {
        error.fire(err.message)
      })
  },
  // registro de usuarios
  signUp({ commit }, payload) {
    auth
      .createUserWithEmailAndPassword(`${payload.email}`, `${payload.password}`)
      .then(res => {
        db.collection('users')
          .doc(`${res.user.uid}`)
          .set({
            name: `${payload.name}`,
            email: `${payload.email}`,
            isAdmin: false,
            isDoctor: false
          })
          .then(() => success.fire('Usuario Creado!'))
          .catch(err => error.fire(err.message))
        const newUser = {
          id: res.user.uid,
          name: `${payload.name}`,
          email: `${payload.email}`,
          photoUrl: res.user.photoUrl,
          isAdmin: res.user.isAdmin,
          isDoctor: res.user.isDoctor,
          doctorId: res.user.doctorId
        }
        commit('setToken', res.user.ra)
        commit('setUser', newUser)
        localStorage.setItem('idToken', res.user.ra)
        localStorage.setItem('idUser', res.user.uid)
        Cookie.set('idToken', res.user.ra)
        Cookie.set('idUser', res.user.uid)
        this.$router.push('/panel')
        success.fire(`La Comida esta LISTA!!!!`)
      })
      .catch(err => {
        error.fire(err)
      })
  },
  signIn({ commit }, payload) {
    auth
      .signInWithEmailAndPassword(`${payload.email}`, `${payload.password}`)
      .then(res => {
        commit('setToken', res.user.ra)
        db.collection('users')
          .doc(`${res.user.uid}`)
          .get()
          .then(user => {
            const loggedUser = {
              id: user.id,
              name: user.data().name,
              email: user.data().email,
              photoUrl: user.data().photoUrl,
              isAdmin: user.data().isAdmin,
              isDoctor: user.data().isDoctor,
              doctorId: user.data().doctorId
            }
            commit('setUser', loggedUser)
          })
          .catch(err => error.fire(err.message))
        localStorage.setItem('idToken', res.user.ra)
        localStorage.setItem('idUser', res.user.uid)
        Cookie.set('idToken', res.user.ra)
        Cookie.set('idUser', res.user.uid)
        this.$router.push('/')
        success.fire(`La Comida esta LISTA!!!!`)
      })
      .catch(err => {
        error.fire(`Lo sentimos, hubo un Error (${err.message})`)
      })
  },
  logout({ commit }) {
    this.$router.push('/feria')
    commit('clearToken')
    commit('clearUser')
    Cookie.remove('idToken')
    Cookie.remove('idUser')
    if (process.client) {
      localStorage.removeItem('idToken')
      localStorage.removeItem('idUser')
    }
  }
}
