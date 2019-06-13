

import React, { lazy } from 'react'
import {Route} from 'react-router-dom'

const routeList = [{
    component: lazy(() => import('../views/Home/index.js')),
    path: '/home'
},{
    component: lazy(() => import('../views/My/index.js')),
    path: '/my'
},{
    component: lazy(() => import('../views/TaskCenter/index.js')),
    path: '/taskCenter'
}]

const RouterList = () => (
    routeList.map((item, key) => {
      return <Route key={key} exact path={item.path} component={item.component}/>;
    })
  );
  
export default RouterList;

