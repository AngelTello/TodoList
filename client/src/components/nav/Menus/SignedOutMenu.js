import React from 'react';
import { Menu } from 'semantic-ui-react';

const SignedOutMenu = () => {
	return (
		<Menu.Item position="right">
			<a href="/auth/google">
				<div className="ui basic inverted button">
					Login
					<i className="right paw icon" />
				</div>
			</a>
		</Menu.Item>
	);
};

export default SignedOutMenu;
