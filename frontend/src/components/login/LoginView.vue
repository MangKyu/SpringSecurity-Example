<template>
  <div id="login">
    <!-- Card -->
    <mdb-card>
      <mdb-card-body>
      <form>
        <p class="h4 text-center mb-4">Sign in</p>
        <div class="grey-text">
          <mdb-input v-model="userEmail" label="Your email" icon="envelope" type="email"/>
          <mdb-input v-model="userPw" label="Your password" icon="lock" type="password"/>
        </div>
        <div class="text-center">
          <mdb-btn @click="requestLogin" type="button">Login</mdb-btn>
        </div>
      </form>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue'

export default {
  name: 'loginView',
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody
  },
  data () {
    return {
      userEmail: '',
      userPw: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

    requestLogin: function () {
      if (!this.userEmail || !this.userPw) {
        alert('Email or Password is Empty')
        return false
      } else {
        this.$axios.post('/api/user/login',
          {userEmail: this.userEmail, userPw: this.userPw}
        ).then(response => {
          if (response.status === 200) {
            alert('Authorization: ' + response.headers['authorization'])
            localStorage.setItem('authorization', response.headers['authorization'])
            this.$router.push('/common/HelloWorld')
          }
        }).catch((exception) => {
          alert('ERROR!!!! : ' + exception)
        })
      }
    }
  }
}
</script>
