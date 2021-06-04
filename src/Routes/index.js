import {Route, Switch} from "react-router-dom"
import Home from "../Pages/Home"
import Products from "../Pages/Products";
import Confraternization from "../Pages/Confraternization";
import Graduation from "../Pages/Graduation";
import Wedding from "../Pages/Wedding";

const Routes = () => {
    return(
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route exact path = "/produtos">
                <Products/>
            </Route>
            <Route path = "/confraternizacao" >
                <Confraternization/>
            </Route>
            <Route path = "/graduacao" >
                <Graduation/>
            </Route>
            <Route path = "/casamento" >
                <Wedding/>
            </Route>
        </Switch>
    )
}

export default Routes;