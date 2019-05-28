import { db } from '@/plugins/firebase'
import { success } from '../plugins/swal';

export const state = () => ({
  appointments: []
})

export const mutations = {
  setAppointments(state, appointment) {
    state.appointments.push(appointment)
  },
  resetAppointments(state) {
    state.appointments = []
  }
}

export const actions = {
  setUserAppointments({ rootState, commit }) {
    db.collection('appointments')
      .where('userId', '==', `${rootState.auth.user.id}`)
      .orderBy('date', 'desc')
      .get()
      .then(appointments => {
        appointments.forEach(appointment => {
          const payload = {
            id: appointment.id,
            userId: appointment.data().userId,
            doctorId: appointment.data().doctorId,
            requestedDate: appointment.data().requestedDate,
            desiredDate: appointment.data().desiredDate
          }
          commit('setAppointments', payload)
        })
      })
  },
  updateMedicalHistory({ rootState }, data) {
    const payload = {
      ...data
    }
    db.collection('users')
      .doc(`${rootState.auth.user.id}`)
      .set(payload, { merge: true })
      .then(() => {
        success.fire('Historial Medico Actualizado')
      })
      .catch(err => {
        error.fire(err.message)
      })
    }
}
