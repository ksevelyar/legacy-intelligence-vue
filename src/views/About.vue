<template lang="pug">
.post(v-html="html")
</template>

<script>
import hw from "@/md/hello-world.md"

export default {
  computed: {
    html() {
      return hw.html
    },
    title() {
      return hw.attributes.title
    }
  }
}
</script>

<style lang="sass">
.post
  color: white
</style>
