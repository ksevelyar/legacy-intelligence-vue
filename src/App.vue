<template lang="pug">
.app
  //#nav
    router-link(to='/') Home
    | |

    router-link(to='/about') About
  router-view.
</template>

<style lang="sass">
@font-face
  font-family: "Iosevka"
  font-display: swap
  font-stretch: normal
  font-style: normal
  src: url("/iosevka/iosevka-light.woff2") format("woff2")

body
  margin: 0

.app
  background: #111
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  margin: 0
  box-sizing: border-box
</style>
