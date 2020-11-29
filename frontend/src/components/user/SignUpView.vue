<template>
  <!-- Card -->
  <mdb-card>
    <mdb-card-body>
      <form>
        <p class="h4 text-center py-4">Sign up</p>
        <div class="grey-text">
          <mdb-input v-model="email" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <mdb-input v-model="pw" label="Your password" icon="lock" group type="password" validate/>
          <mdb-input v-model="pw2" label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right"/>
          <!--
          <b-form-input v-model="birthDate" type="date" placeholder="Your BirthDate" />
          <div class="custom-gender radio-group">
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="male" name="groupOfGenderRadios" checked>
              <label class="custom-control-label" for="male">Male</label>
            </div>

            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="female" name="groupOfGenderRadios">
              <label class="custom-control-label" for="female">Female</label>
            </div>
          </div>
          -->
        </div>
        <div class="text-center py-4 mt-3">
          <mdb-btn color="cyan" type="submit" @click="insertUserInfo">Register</mdb-btn>
        </div>
      </form>
    </mdb-card-body>
  </mdb-card>
  <!-- Card -->
</template>

<script>
import {mdbInput, mdbBtn, mdbCard, mdbCardBody} from 'mdbvue'

export default {
  name: 'signUpView',
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody
  },
  data () {
    return {
      email: '',
      pw: '',
      pw2: ''
    }
  },
  methods: {
    insertUserInfo: function () {
      if (!this.email || !this.pw || !this.pw2) {
        alert('Empty items exist')
        return false
      } else if (this.pw !== this.pw2) {
        alert('Password1 and Password2 is not same!')
        return false
      } else {
        this.$axios.post('/api/user/signUp',
          {email: this.email, pw: this.pw}
        ).then(response => {
          if (response.status === 200) {
            alert('Sign Up Success')
            this.$router.push({name: 'LoginView'})
          } else {
            alert(response.data)
          }
        }).catch((exception) => {
          alert(exception)
        })
      }
    }
  }
}
</script>
