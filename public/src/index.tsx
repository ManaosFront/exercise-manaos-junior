import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
