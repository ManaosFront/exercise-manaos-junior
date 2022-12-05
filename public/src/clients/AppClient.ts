import { IAppContext } from '../contexts/AppContext';
import { User } from '../types/User';

class AppClient implements IAppContext {
	user: User;
	constructor() {
		this.user = {
			id: '1',
			name: 'Victor Courtin',
			email: 'maildevictor@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date(),
			isAdmin: true,
		};
	}
}

export default AppClient;
