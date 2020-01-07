import Tab1 from "../views/Tab1";
import Tab2 from "../views/Tab2";
import Tab3 from "../views/Tab3";
import Tab4 from "../views/Tab4";
import Tab5 from "../views/Tab5";


const routes = [
    {
        path:"/",
        redirect:"/tab1"
    },
    {
        path:"/tab1",
        component:Tab1
    },
    {
        path:"/tab2",
        component:Tab2
    },
    {
        path:"/tab3",
        component:Tab3
    },
    {
        path:"/tab4",
        component:Tab4
    },
    {
        path:"/tab5",
        component:Tab5
    }
]

export default routes