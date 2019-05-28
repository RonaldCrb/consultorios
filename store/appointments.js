import { db } from '@/plugins/firebase'
import { error, success } from '@/plugins/swal'

export const actions = {
  createAppointment({ rootState }, appointment) {
    const payload = {
      doctorId: `${rootState.plazamedica.currentDoctor.id}`,
      userId: `${rootState.auth.user.id}`,
      ...appointment
    }
    db.collection('appointments')
      .doc()
      .set(payload)
      .then(() => {
        success.fire('Cita Solicitada!')
      })
      .catch(err => {
        error.fire(err.message)
      })
  }
}
