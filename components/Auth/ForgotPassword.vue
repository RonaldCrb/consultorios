<template>
  <form class="form-app form-forgot-password" @submit.prevent="submit">
    <div v-if="notice" class="alert alert-info">{{ notice }}</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-control"
        placeholder="email@example.com"
      />
    </div>
    <button type="submit" class="btn btn-primary mb-3">Reset Password</button>
    <div>
      <router-link to="/">Sign in</router-link>
      <br />
      <router-link to="/signup">Sign up</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      error: '',
      notice: ''
    }
  },
  methods: {
    submit() {
      this.$http.plain
        .post('/password_resets', { email: this.email })
        .then(() => this.submitSuccessful())
        .catch(error => this.submitFailed(error))
    },
    submitSuccessful() {
      this.notice = 'Email with password reset instructions had been sent.'
      this.error = ''
      this.email = ''
    },
    submitFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        ''
    }
  }
}
</script>
