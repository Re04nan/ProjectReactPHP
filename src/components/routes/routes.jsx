import React from 'react';
import {Switch, Route} from 'react-router-dom';  

import Index from '../Index';
import Products from '../Products';
import OurStores from '../Our-stores';
import Contact from '../Contact';                              
                
const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/Produtos" component={Products}/>
            <Route path="/Nossaslojas" component={OurStores}/>
            <Route path="/Contatos" component={Contact}/>
            <Route component={() => <div>Page Error 404!</div>}/>
        </Switch>
        );
}  

export default Routes;