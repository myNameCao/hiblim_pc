

// import layer from '../pages/layer'
import asyncComponent  from './asyncComponent'

import index from '../pages/index'

const home = asyncComponent(() => import('../pages/home'));
const login = asyncComponent(() => import("../pages/login"));
const onboarding = asyncComponent(() => import("../pages/onboarding"));
const files = asyncComponent(() => import("../pages/files"));
const billing = asyncComponent(() => import("../pages/billing"));
const join = asyncComponent(() => import("../pages/join"));
const contactUs = asyncComponent(() => import("../pages/contactUs"));

const routes = [
  {
    path: '/',
    exact:true,
    component: index,
  },
  {
    path: '/login',
    title:'LOGIN',
    component: login,
  },
  {
    path: '/join',
    component: join,
  },
  {
    path: '/contactUs',
    title:'CONTACTUS',
    component: contactUs,
  },
  {
    path: '/onboarding',
    component: onboarding,
    routes: [
      {
        path: '/onboarding/home',
        title:'HOME',
        component: home
      },
     
      {
        path: '/onboarding/files',
        component: files
      },
      {
        path: '/onboarding/billing',
        component: billing
      },
    ]
  },
  
]

export default routes
