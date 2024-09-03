export class Router{
    routes={}
    
    add(routeName , link) {
        this.routes[routeName] = link
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        
    
        window.history.pushState({}, "", event.target.href)
    
        
        this.handle()
        
    
        
    
        
    }

    handle() {
        const app = document.querySelector('.app')
        const bgBody = document.querySelector('body')
    
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
        
    
        
        fetch(route)
        .then(data => data.text())
        .then(html =>{
            app.innerHTML = html;

            if(route === './pages/home.html'){
                bgBody.classList.remove('bg-universe')
                bgBody.classList.remove('bg-exploration')
                bgBody.classList.add('bg-home')
        
            }if(route === './pages/universe.html'){
                bgBody.classList.remove('bg-home')
                bgBody.classList.remove('bg-exploration')
                bgBody.classList.add('bg-universe')
        
            }if(route === './pages/exploration.html'){
                bgBody.classList.remove('bg-universe')
                bgBody.classList.remove('bg-home')
                bgBody.classList.add('bg-exploration')
        
            }else if(route === './pages/404.html'){
                bgBody.classList.remove('bg-universe')
                bgBody.classList.remove('bg-home')
                bgBody.classList.remove('bg-exploration')
                bgBody.classList.add('bg-404')
            
        }})
    }
}
