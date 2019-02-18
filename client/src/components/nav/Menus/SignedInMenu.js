import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const SignedInMenu = ({auth}) => {
	return (
		<Menu.Item position="right">
			<Dropdown pointing="top left" text={auth.displayName}>
				<Dropdown.Menu>
                    <Dropdown.Item text="Sign Out" icon="power" href="/api/logout" />
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Item>
	);
};

export default SignedInMenu;
