import { User } from '../types/User';
import { createContext } from 'react';

export interface IAppContext {
	user: User;
}

export const AppContext = createContext<IAppContext | null>(null);
