<template lang="pug">
.posts
  router-link.post-link(to='/scaffolding-phoenix-1-5') Scaffolding Phoenix 1.5 JSON API
  router-link.post-link(to='/prerender-spa-plugin-in-nixos') prerender-spa-plugin in NixOS
</template>

<style lang="sass">
a
  text-decoration: none
  color: #54C6B5

a:hover
  color: #9E3150
  transition: all 0.5s linear

.post-link
  margin-top: 1rem
  font-size: 1.25rem
  display: block

html
  font-size: 16px

@media (min-width: 700px)
  .post-link
    font-size: 2rem

@media (min-width: 1600px)
  .post-link
    font-size: 3rem
</style>
