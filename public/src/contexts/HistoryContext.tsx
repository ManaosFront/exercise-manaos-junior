import { createContext } from 'react';

interface IHistoryContext {
	searchHistory: string;
	setSearchHistory: (value: string) => void;
}

export const HistoryContext = createContext<IHistoryContext>({
	searchHistory: '',
	setSearchHistory: (_) => {},
});
