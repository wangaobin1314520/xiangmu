import React from 'react'
import { Switch , Redirect , Route } from 'react-router-dom'

const RouterView = (props) =>{
    const routes = props.routes.filter(val=>val.component)
    const redirect = props.routes.filter(val=>val.redirect)
    return (
        <Switch>
            {
                routes.map((item,index)=>{
                    return (
                        <Route key={index} path={item.path} render={props=>{
                            return <item.component {...props} routes={item.children} />
                        }} />
                    )
                })
            }
            {
                redirect.map((item,index)=>{
                    return <Redirect key={index} to={item.redirect} />
                })
            }
        </Switch>
    )
}

export default RouterView