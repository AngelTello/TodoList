import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { openModal } from '../../../actions';

const SignedInMenu = ({ auth, openModal }) => {
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
					<Dropdown.Item
						text="Test Modal Demo"
						icon="external"
						onClick={() => openModal('TestModal')}
					/>
					<Dropdown.Item text="Sign Out" icon="power" href="/api/logout" />
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Item>
	);
};

const actions = { openModal };

export default connect(
	null,
	actions
)(SignedInMenu);
