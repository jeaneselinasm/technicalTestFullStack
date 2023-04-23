<script >
import HomeCard from "./components/HomeCard.vue"
import Navbar from "./components/Navbar.vue"
export default {
  components : {
    HomeCard, 
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>

</style>
