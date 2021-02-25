<template>
  <div id="app">
    <router-view></router-view>
    <notifications position="top right"  classes="vue-notification"/>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
