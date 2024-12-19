// Constants used throughout the application
export const IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes
export const APP_NAME = 'MedWhiz';

export const NAV_ITEMS = [
  {
    path: '/account',
    label: 'Account',
    icon: 'UserCircle'
  },
  {
    path: '/history',
    label: 'History',
    icon: 'History'
  },
  {
    path: '/consultant',
    label: 'Consultant',
    icon: 'Stethoscope'
  }
] as const;