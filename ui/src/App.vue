<template>
  <div id="app">
    <Header />
    <div v-if="users.length === 0" class="loader">
      <Loader />
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
import Users from './components/Users.vue'
import Loader from './components/Loader.vue'
import { getUserInfo } from './services/UserService'
export default {
  name: 'App',
  components: {
    Header,
    Users,
    Loader
  },
  data() {
      return {
          users: []
      }
  },
  methods: {
    getAllUsers() {
      getUserInfo().then(response => {
        console.log(response)
        this.users = response
      })
    }
  },
  mounted () {
    console.log("I am in mounted!!!")
    this.getAllUsers();
  },
  setup () {
    console.log("I am in setup!!!")
    
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>