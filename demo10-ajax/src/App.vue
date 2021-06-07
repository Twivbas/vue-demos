<template>
  <div class="container">
    <Search/>
    <users-main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Search from './components/Search.vue'

export default {
  components: {
    UsersMain: Main,
    Search
  }
}
</script>

<style>

</style>
