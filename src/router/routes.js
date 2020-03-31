

import layer from '../pages/layer'
import home from '../pages/home'
import mailroom from '../pages/mailroom'

const routes = [
  {
    path: '/',
    component: layer,
    routes: [
      {
        path: '/home',
        IndexRoute:true,
        component: home
      },
     
      {
        path: '/mailroom',
        component: mailroom
      },
      {
        path: '/*',
        IndexRoute:true,
        component: home
      }
    ]
  }
]

export default routes
