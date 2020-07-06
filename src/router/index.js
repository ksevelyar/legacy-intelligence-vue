import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Post from "../views/Post.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
]

function mdRoutes() {
  const context = require.context("@/md", true)
  return context.keys().map(mdFile => {
    const path = `${mdFile.replace(".", "").replace(".md", "")}`
    return { path, component: Post }
  })
}

console.log(mdRoutes().concat(routes))

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: mdRoutes().concat(routes)
})

export default router
