<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect,isAuthenticated,user } = useAuth0();

function login() {
  loginWithRedirect().then((res) => {
    console.log(res)
  })
}

function test(){
  console.log(isAuthenticated.value,
      user.value)
}
</script>

<template>
  <div>
    <button @click="login">Log in</button>
    <button @click="test">test</button>
  </div>
</template>

<style scoped>

</style>
