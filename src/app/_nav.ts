import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Features'
  },
  {
    name: 'Cork Road Closures',
    url: '/theme/road-closures',
    icon: 'icon-cursor'
  },
  {
    name: 'Upload Invoices',
    url: '/theme/upload',
    icon: 'icon-pencil'
  },
  {
    name: 'Weather Info',
    url: '/theme/weatherinfo',
    icon: 'icon-bell'
  },
  {
    name: 'Tax Calculator',
    url: '/theme/taxcalculator',
    icon: 'icon-calculator'
  },
  {
    name: 'Profile',
    url: '/theme/profile',
    icon: 'icon-user'
  }/*,
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }*/
];
