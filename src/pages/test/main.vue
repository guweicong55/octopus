<template>
  <section>
    <left>
      <div>
        <slot />
      </div>
    </left>
    <right>
      <div>
        <slot />
      </div>
    </right>
  </section>
</template>

<script>
import left from './left'
import right from './right'

export default {
  data () {
    return {
    }
  },
  components: {
    left,
    right
  }
}
</script>
