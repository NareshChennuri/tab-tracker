<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <br/>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: 'abc',
        password: '123'
      }
    },
    watch: {
      email (value) {
        console.log('email has changed', value)
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log('register button was clicked', response.data.message)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
