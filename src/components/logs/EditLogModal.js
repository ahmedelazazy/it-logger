import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logAction';

function EditLogModal({ log, updateLog }) {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		setMessage(log?.message);
		setAttention(log?.attention);
		setTech(log?.tech);
	}, [log]);

	const onSubmit = () => {
		if (!message) M.toast({ html: 'Please enter a message' });
		else if (!tech) M.toast({ html: 'Please select technician' });
		else {
			updateLog({
				id: log.id,
				message,
				attention,
				tech,
				date: new Date(),
			});

			setMessage('');
			setTech('');
			setAttention(false);

			M.toast({ html: 'Log record updated.' });
		}
	};

	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Edit System Log</h4>
				<div className="row">
					<div className="input-field">
						<input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
							<option value="" disabled>
								Select Technician
							</option>
							<option value="John Doe">John Doe</option>
							<option value="Sam Smith">Sam Smith</option>
							<option value="Sara Wilson">Sara Wilson</option>
						</select>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" className="filled-in" checked={attention} onChange={e => setAttention(!attention)} />
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
					Enter
				</a>
			</div>
		</div>
	);
}

const modalStyle = {
	width: '75%',
	height: '75%',
};

const mapStateToProps = state => ({
	log: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
