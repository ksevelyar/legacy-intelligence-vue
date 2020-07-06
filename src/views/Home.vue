<template lang="pug">
.posts
  router-link(to='/prerender-spa-plugin-in-nixos') prerender-spa-plugin in NixOS
</template>

<style scoped lang="sass">

a
  text-decoration: none
  color: #54C6B5
  font-size: 0.9rem

@media (max-width: 600px)
  a
    font-size: 8px

.eye
  transition: all 0.5s linear

a:hover .eye
  color: #9E3150
</style>
