import { AppContext, HistoryContext, ThemeModeContext } from './contexts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { AppClient } from './clients';
import { Route as AppRoute } from './types';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { PageDefault } from './components/PageDefault';
import { getAppTheme } from './styles/theme';
import { routes } from './config';

function App() {
	const [searchHistory, setSearchHistory] = useState<string>('');
	const historyValue = { searchHistory, setSearchHistory };

	const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
	const appClient = new AppClient();

	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
			},
		}),
		[]
	);

	const theme = useMemo(() => getAppTheme(mode), [mode]);

	const addRoute = (route: AppRoute) => <Route key={route.key} path={route.path} element={<PageDefault />} />;

	return (
		<AppContext.Provider value={appClient}>
			<ThemeModeContext.Provider value={themeMode}>
				<ThemeProvider theme={theme}>
					<HistoryContext.Provider value={historyValue}>
						<CssBaseline />
						<Router>
							<Routes>
								<Route element={<Layout />}>
									<Route key='router-home' path='/' element={<Home />} />

									<Route key='router-dashboard' path='/dashboard' element={<Dashboard />} />

									{routes
										.filter((e) => !e.customComponent)
										.map((route: AppRoute) =>
											route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
										)}
								</Route>
							</Routes>
						</Router>
					</HistoryContext.Provider>
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</AppContext.Provider>
	);
}

export default App;
