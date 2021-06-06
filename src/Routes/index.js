import {Route, Switch} from "react-router-dom"
import Products from "../Pages/Products";
import Confraternization from "../Pages/Confraternization";
import Graduation from "../Pages/Graduation";
import Wedding from "../Pages/Wedding";
import NotFound from "../Pages/NotFound";

const Routes = () => {
    return(
        <Switch>
            <Route exact path = "/">
                <Products/>
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
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Routes;