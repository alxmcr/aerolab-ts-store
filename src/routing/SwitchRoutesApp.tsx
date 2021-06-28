import { SwitchRoutesAppProps } from "componentsTypes"
import { CategoryPage } from "pages/CategoryPage/CategoryPage"
import { HomePage } from "pages/HomePage/HomePage"
import { Redirect, Route, Switch } from "react-router-dom"

export const SwitchRoutesApp = ({ isAuthenticated }: SwitchRoutesAppProps) => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            {
                isAuthenticated
                    ? <Route path="/category" component={CategoryPage} />
                    : <Redirect to="/" />
            }
        </Switch>
    )
}