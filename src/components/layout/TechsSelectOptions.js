import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';

export const TechsSelect = ({ getTechs, techs, loading }) => {
	useEffect(() => {
		getTechs();
	}, []);

	return (
		<Fragment>
			{!loading &&
				techs.map(t => (
					<option key={t.id} value={t.firstName + ' ' + t.lastName}>
						{t.firstName} {t.lastName}
					</option>
				))}
		</Fragment>
	);
};

const mapStateToProps = state => ({
	techs: state.tech.techs,
	loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechsSelect);
