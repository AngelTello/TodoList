import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignedInMenu = ({ auth }) => {
	return (
		<Menu.Item position="right">
			<Dropdown pointing="top left" text={auth.displayName}>
				<Dropdown.Menu>
					<Dropdown.Item
						as={Link}
						to="/formControls"
						text="Form Controls Demo"
						icon="settings"
					/>
					<Dropdown.Item text="Sign Out" icon="power" href="/api/logout" />
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Item>
	);
};

export default SignedInMenu;
