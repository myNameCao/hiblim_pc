

// import layer from '../pages/layer'
import index from '../pages/index'
import login from '../pages/login'
import onboarding from '../pages/onboarding'
import home from '../pages/home'
import mailroom from '../pages/mailroom'

const routes = [
  {
    path: '/',
    exact:true,
    component: index,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/onboarding',
    component: onboarding,
    routes: [
      {
        path: '/onboarding/home',
        component: home
      },
     
      {
        path: '/onboarding/mailroom',
        component: mailroom
      },
    ]
  },
  
]

export default routes
