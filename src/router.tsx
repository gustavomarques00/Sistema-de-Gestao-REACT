import {BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Account';
import { Account } from './pages/Account';
import { Register } from './pages/Register';
import { Exit } from './pages/Exit';

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/conta"  component={Account}/>
            <Route path="/cadastrar"  component={Register}/>
            <Route path="/sair"  component={Exit}/>
        </BrowserRouter>
    );
}