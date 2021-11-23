import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog, setCurrent } from '../../actions/logAction';

function LogItem({ log, deleteLog, setCurrent }) {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({ html: 'Log record deletd ' });
	};

	const onEdit = () => {
		setCurrent(log.id);
	};

	return (
		<li className="collection-item">
			<div>
				<a href="#edit-log-modal" onClick={onEdit} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
					{log.message}
				</a>
				<br />
				<span className="grey-text">
					<span className="black-text">ID #{log.id}</span> last updated by
					<span className="black-text"> {log.tech}</span> on <Moment format="MMM Do YYYY, hh:mm:ss a">{log.date}</Moment>
				</span>
				<a href="#!" onClick={onDelete} className="secondary-content">
					<div className="material-icons grey-text">delete</div>
				</a>
			</div>
		</li>
	);
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
