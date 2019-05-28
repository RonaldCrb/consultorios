import Swal from 'sweetalert2'

const errorConfig = {
  type: 'error',
  showConfirmButton: false,
  grow: true,
  timer: 2500,
  background: '#fff',
  position: 'center'
}

export const error = Swal.mixin(errorConfig)

const successConfig = {
  type: 'success',
  showConfirmButton: false,
  grow: true,
  timer: 2500,
  background: '#fff',
  backdrop: true,
  position: 'center'
}

export const success = Swal.mixin(successConfig)

const toastConfig = {
  type: 'success',
  showConfirmButton: false,
  toast: true,
  grow: true,
  timer: 1500,
  background: '#fff',
  position: 'top'
}

export const toast = Swal.mixin(toastConfig)
