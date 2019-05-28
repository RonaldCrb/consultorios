<template>
  <form class="form-app form-reset-password" @submit.prevent="reset">
    <div v-if="notice" class="alert alert-info">{{ notice }}</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div class="form-group">
      <label for="password">New Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div class="form-group">
      <label for="password">Password Confirmation</label>
      <input
        id="password_confirmation"
        v-model="password_confirmation"
        type="password"
        class="form-control"
        placeholder="Password Confirmation"
      />
    </div>
    <button type="submit" class="btn btn-primary mb-3">Reset password</button>
    <div>
      <router-link to="/">Sign in</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      password: '',
      password_confirmation: '',
      error: '',
      notice: ''
    }
  },
  created() {
    this.checkPasswordToken()
  },
  methods: {
    reset() {
      this.$http.plain
        .patch(`/password_resets/${this.$route.params.token}`, {
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(response => this.resetSuccessful(response))
        .catch(error => this.resetFailed(error))
    },
    resetSuccessful(response) {
      this.notice =
        'Your password has been reset successfully! Please sign in with your new password.'
      this.error = ''
      this.password = ''
      this.password_confirmation = ''
    },
    resetFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        'Something went wrong'
      this.notice = ''
    },
    checkPasswordToken() {
      this.$http.plain
        .get(`/password_resets/${this.$route.params.token}`)
        .catch(error => {
          this.resetFailed(error)
          this.$router.replace('/')
        })
    }
  }
}
</script>
