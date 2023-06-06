<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated,user } = useAuth0();

function test(){
  console.log(isAuthenticated.value,
      user.value)
}
</script>

<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<style scoped>

</style>
