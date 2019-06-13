
import RouterList from './routes.js';
import React, {  Suspense } from 'react'
import {Route, HashRouter, Redirect} from 'react-router-dom'
import FooterBar from '../components/FooterBar/index.js';

const Router = function() {
    return (
        <HashRouter>
            <Suspense fallback={<div>loading......</div>}>
                <React.Fragment>
                    <Route exact path="/" render={() => <Redirect to="/home"/>}></Route>
                    <RouterList />
                    <FooterBar/>
                </React.Fragment>
            </Suspense>
        </HashRouter>
    )
}
export default Router
