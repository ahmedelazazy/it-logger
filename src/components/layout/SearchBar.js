import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { searchLogs } from '../../actions/logAction';

function SearchBar({ searchLogs }) {
	const text = useRef();

	return (
		<nav>
			<div className="nav-wrapper blue">
				<form>
					<div className="input-field">
						<input id="search" type="search" placeholder="Search..." ref={text} onChange={e => searchLogs(e.target.value)} />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
}

export default connect(null, { searchLogs })(SearchBar);
