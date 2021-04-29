<template>
  <section>
    {{ type  }}
  </section>
</template>

<script>
export default {
  inject: ['type'],
  mounted () {
    console.log(this.type);
  }
}
</script>
