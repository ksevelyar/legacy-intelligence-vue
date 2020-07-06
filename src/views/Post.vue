<template lang="pug">
.post(v-html="md.html")
</template>

<script>
export default {
  data() {
    return {
      md: {}
    }
  },
  created() {
    this.md = require(`@/md${this.$route.path.replace(/\/$/, "")}.md`)
    document.title = this.md.attributes.title
  }
}
</script>

<style lang="sass">
.post
  color: white
  margin: auto
</style>
