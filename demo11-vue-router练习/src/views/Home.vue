<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nva-tabs">
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
      </ul>
      <div>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
