import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Products from './pages/products';

// Função na qual direciona(interliga) as páginas
// exact serve para dizer que a rota deve ser exatamente o que está no path
const Routes= ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Products}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;