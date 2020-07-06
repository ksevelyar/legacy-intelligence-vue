<template lang="pug">
.post(v-html="html")
</template>

<script>
import hw from "@/md/hello-world.md"

export default {
  computed: {
    html() {
      return hw.html
    }
  },
  created() {
    this.setTitle(hw.attributes.title)
  },
  methods: {
    setTitle(title) {
      document.title = title
    }
  }
}
</script>

<style lang="sass">
.post
  color: white
</style>
