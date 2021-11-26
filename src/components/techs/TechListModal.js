import React, { useEffect } from 'react';

import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';

function TechListModal({ getTechs, techs, loading }) {
	useEffect(() => {
		getTechs();
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				{loading && <h4>Loading</h4>}
				<ul className="collection">{!loading && techs?.map(tech => <TechItem key={tech.id} tech={tech} />)}</ul>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	techs: state.tech.techs,
	loading: state.tech.loading,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
