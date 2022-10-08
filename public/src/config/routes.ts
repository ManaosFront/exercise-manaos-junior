import {
	CreditCard as BillingIcon,
	AutoGraph as DashboardIcon,
	Description as DescriptionIcon,
	Home as HomeIcon,
	ListAlt as ListIcon,
	PlaylistPlay as PlaylistPlayIcon,
	PublicOff as PrivateIcon,
	SettingsOutlined as SettingsIcon,
	AccountBoxRounded as UserIcon,
} from '@mui/icons-material';

import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { Route } from '../types/Route';

const routes: Array<Route> = [
	{
		key: 'router-home',
		title: 'Home',
		description: 'Home',
		path: '/',
		enabled: true,
		icon: HomeIcon,
		appendDivider: true,
		customComponent: true,
	},
	{
		key: 'router-dashboard',
		title: 'Dashboard',
		description: 'Dashboard',
		path: '/dashboard',
		enabled: true,
		icon: DashboardIcon,
		customComponent: true,
	},
	{
		key: 'router-list',
		title: 'List',
		description: 'List',
		path: '/list',
		enabled: true,
		icon: PlaylistPlayIcon,
	},
	{
		key: 'router-document',
		title: 'Document',
		description: 'Document',
		path: '/document',
		enabled: true,
		icon: DescriptionIcon,
	},
	{
		key: 'router-code',
		title: 'Code Editor',
		description: 'Code Editor',
		path: '/code-editor',
		enabled: false,
		icon: PrivateIcon,
		appendDivider: true,
	},
	{
		key: 'router-my-account',
		title: 'My Account',
		description: 'My Account',
		path: '/account',
		enabled: true,
		icon: UserIcon,
		subRoutes: [
			{
				key: 'router-settings',
				title: 'Settings',
				description: 'Account Settings',
				path: '/account/settings',
				enabled: true,
				icon: SettingsIcon,
			},
			{
				key: 'router-preferences',
				title: 'Preferences',
				description: 'Account Preferences',
				path: '/account/preferences',
				enabled: true,
				icon: ListIcon,
			},
			{
				key: 'router-billing',
				title: 'Billing',
				description: 'Account Billing',
				path: '/account/billing',
				enabled: true,
				icon: BillingIcon,
			},
		],
	},
];

export default routes;
