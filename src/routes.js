import React from 'react';
import { Switch, Route} from 'react-dom';
import Dashboard from './layouts//Dashboard';

const routes = () =>( 
    <routes>


<Switch>
        <Route exact Path ='/' component={Dashboard}/>
    </Switch>
    </routes>
)
export default routes;