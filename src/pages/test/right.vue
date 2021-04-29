<template>
  <section class="right">
    <slot />
  </section>
</template>

<script>
export default {
  provide: {
    parent: this,
    type: 'right'
  },
  data () {
    return {
      name: 'right'
    }
  }
}
</script>
