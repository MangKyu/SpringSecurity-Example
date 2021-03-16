<template>
  <div id ="main">
    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <router-link to="/login/loginView">
      <mdb-btn color="primary" >Sign-In</mdb-btn>
    </router-link>

    <!-- Secondary button -->
    <router-link to="/user/signUpView">
      <mdb-btn color="secondary">SignUp</mdb-btn>
    </router-link>

    <!-- Contextual button for informational alert messages -->
    <mdb-btn color="info" @click="findAll">Get All Users</mdb-btn>

  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue'

export default {
  name: 'helloWorld',
  components: {
    mdbBtn
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoLoginView () {
      this.$router.push('/login/loginView')
    },
    gotoConvertView () {
      this.$router.push('/convert/convertView')
    },
    findAll () {
      this.$axios.get('/api/user/list')
        .then(response => {
          alert(JSON.stringify(response.data))
        })
        .catch(exception => {
          alert(exception)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
