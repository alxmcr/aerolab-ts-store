import { SwitchRoutesAppProps } from "componentsTypes"
import { CategoryPage } from "pages/CategoryPage/CategoryPage"
import { Redirect, Route, Switch } from "react-router-dom"

export const SwitchRoutesApp = ({ isAuthenticated }: SwitchRoutesAppProps) => {
    return (
        <Switch>
            <Route path="/" component={CategoryPage} exact />
            {
                isAuthenticated
                    ? <Route path="/category" component={CategoryPage} />
                    : <Redirect to="/" />
            }
        </Switch>
    )
}