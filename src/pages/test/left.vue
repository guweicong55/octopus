<template>
  <section class="left">
    <slot />
  </section>
</template>

<script>
export default {
  provide: {
    parent: this,
    type: 'left'
  },
  data () {
    return {
      name: 'left'
    }
  }
}
</script>
