import React from 'react';

export default function AddBtn() {
	return (
		<div className="fixed-action-btn">
			<a href="#add-log-modal" className="btn-floating btn-large blue dargken-2 modal-trigger">
				<i className="large material-icons">add</i>
			</a>
			<ul>
				<li>
					<a href="#tech-list-modal" className="btn-floating green modal-trigger">
						<i className="large material-icons">person</i>
					</a>
				</li>

				<li>
					<a href="#tech-list-modal" className="btn-floating red modal-trigger">
						<i className="large material-icons">person_add</i>
					</a>
				</li>
			</ul>
		</div>
	);
}