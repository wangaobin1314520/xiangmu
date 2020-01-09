import Home from "../views/Home";


const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    }
]

export default routes