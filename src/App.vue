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
  background: #19151D
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  margin: 0
  box-sizing: border-box

code[class*="language-"]
  color: #ccc
  background: none
  font-size: 1em
  text-align: left
  white-space: pre
  word-spacing: normal
  word-break: normal
  word-wrap: normal
  line-height: 1.5
  -moz-tab-size: 4
  -o-tab-size: 4
  tab-size: 4
  -webkit-hyphens: none
  -moz-hyphens: none
  -ms-hyphens: none
  hyphens: none

pre[class*="language-"]
  color: #ccc
  background: none
  font-size: 1em
  text-align: left
  white-space: pre
  word-spacing: normal
  word-break: normal
  word-wrap: normal
  line-height: 1.5
  -moz-tab-size: 4
  -o-tab-size: 4
  tab-size: 4
  -webkit-hyphens: none
  -moz-hyphens: none
  -ms-hyphens: none
  hyphens: none
  padding: 1em
  margin: .5em 0
  overflow: auto

:not(pre) > code[class*="language-"], pre[class*="language-"]
  background: #19151D

:not(pre) > code[class*="language-"]
  padding: .1em
  border-radius: .3em
  white-space: normal

.token
  &.comment, &.block-comment, &.prolog, &.doctype, &.cdata
    color: #999

  &.punctuation
    color: #ccc

  &.tag, &.attr-name, &.namespace, &.deleted
    color: #e2777a

  &.function-name
    color: #6196cc

  &.boolean, &.number, &.function
    color: #f08d49

  &.property, &.class-name, &.constant, &.symbol
    color: #f8c555

  &.selector, &.important, &.atrule, &.keyword, &.builtin
    color: #cc99cd

  &.string, &.char, &.attr-value, &.regex, &.variable
    color: #7ec699

  &.operator, &.entity, &.url
    color: #67cdcc

  &.important, &.bold
    font-weight: bold

  &.italic
    font-style: italic

  &.entity
    cursor: help

  &.inserted
    color: green
</style>
