import { ComponentType, ReactNode } from 'react';

export type Route = {
	key: string;
	title: string;
	description?: string;
	path?: string;
	enabled: boolean;
	icon?: ComponentType;
	subRoutes?: Route[];
	appendDivider?: boolean;
	expanded?: boolean;
	customComponent?: boolean;
};
