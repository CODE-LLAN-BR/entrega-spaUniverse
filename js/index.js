import { Router } from "./Router.js"

const router = new Router()
router.add("/" , "./pages/home.html")
router.add("/universe" , "./pages/universe.html")
router.add("/exploration" , "./pages/exploration.html")
router.add(404 , "./pages/404.html")



router.handle()



// navegação por histórico
window.onpopstate = () => router.handle()  
//iniciar função pela window
window.route = () => router.route()

