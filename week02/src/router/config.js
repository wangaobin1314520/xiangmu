import Tab1 from '../views/Tab1.js'
import Tab2 from '../views/Tab2.js'
import Tab3 from '../views/Tab3.js'

const routes = [
    {
        path:"/",
        redirect:"/tab1"
    },
    {
        path:"/tab1",
        component: Tab1
    },
    {
        path:"/tab2",
        component: Tab2
    },
    {
        path:"/tab3",
        component: Tab3
    }
]

export default routes