<template>
  <div>
    <router-view/>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import footBar from '@/components/footer/footBar.vue';
  export default {
    name: 'App',
    components: {
      footBar
    }
  }
</script>

<style>

</style>
