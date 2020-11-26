import Home from '@/router/views/Home';
import Contact from '@/router/views/Contact';


const routes = [
  {
    path: '/',
    name: 'Home',
    status: false,
    visible: false,
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    status: true,
    visible: true,
    component: Contact
  }
];
export default routes;