

// import layer from '../pages/layer'
import index from '../pages/index'
import home from '../pages/home'
import mailroom from '../pages/mailroom'

const routes = [
  {
    path: '/',
    component: index,
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
      // {
      //   path: '/*',
      //   IndexRoute:true,
      //   component: home
      // }
    ]
  }
]

export default routes
