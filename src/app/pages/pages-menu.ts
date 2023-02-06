import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
 
  {
    title: 'Menu',
    group: true,
  },
 
  {
    title: 'Company Profile',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'User Master',
        link: '/pages/user/list',
      }
       
    ],
  },


 
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '',
      } 
       
    ],
  },
];
