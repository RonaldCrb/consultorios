/* eslint-disable no-console */
import { db } from '@/plugins/firebase'

export const state = () => ({
  doctors: [],
  currentDoctor: {
    id: '',
    name: '',
    phone: '',
    city: '',
    specialty: '',
    img: ''
  }
})

export const mutations = {
  setDoctors(state, doctor) {
    state.doctors.push(doctor)
  },
  resetDoctors(state) {
    state.doctors = []
  },
  setDoctor(state, doctor) {
    state.currentDoctor = doctor
  },
  resetDoctor(state) {
    state.currentDoctor = {}
  }
}

export const actions = {
  setPlazaFull({ commit }, payload) {
    commit('resetDoctors')
    db.collection('doctors')
      .where('city', '==', payload.city)
      .where('specialty', '==', payload.specialty)
      .get()
      .then(doctors => {
        doctors.forEach(doctor => {
          const payload = {
            id: doctor.id,
            name: doctor.data().name,
            phone: doctor.data().phone,
            specialty: doctor.data().specialty,
            city: doctor.data().city,
            img: doctor.data().img
          }
          commit('setDoctors', payload)
        })
      })
  },
  setPlazaCity({ commit }, city) {
    commit('resetDoctors')
    db.collection('doctors')
      .where('city', '==', `${city}`)
      .get()
      .then(doctors => {
        doctors.forEach(doctor => {
          const payload = {
            id: doctor.id,
            name: doctor.data().name,
            phone: doctor.data().phone,
            specialty: doctor.data().specialty,
            city: doctor.data().city,
            img: doctor.data().img
          }
          commit('setDoctors', payload)
        })
      })
  },
  setPlazaSpecialty({ commit }, specialty) {
    commit('resetDoctors')
    db.collection('doctors')
      .where('specialty', '==', `${specialty}`)
      .get()
      .then(doctors => {
        doctors.forEach(doctor => {
          const payload = {
            id: doctor.id,
            name: doctor.data().name,
            phone: doctor.data().phone,
            specialty: doctor.data().specialty,
            city: doctor.data().city,
            img: doctor.data().img
          }
          commit('setDoctors', payload)
        })
      })
  },
  setDoctor({ commit }, doctorId) {
    commit('resetDoctor')
    db.collection('doctors')
      .doc(`${doctorId}`)
      .get()
      .then(doctor => {
        const payload = {
          id: doctor.id,
          name: doctor.data().name,
          phone: doctor.data().phone,
          specialty: doctor.data().specialty,
          city: doctor.data().city,
          img: doctor.data().img
        }
        commit('setDoctor', payload)
      })
  }
}
