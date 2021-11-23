import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logAction';

function Logs({ logs, loading, getLogs }) {
	useEffect(() => {
		getLogs();
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>

			{!logs || logs.length === 0 ? <p className="center">No logs to show...</p> : logs.map(log => <LogItem key={log.id} log={log}></LogItem>)}
		</ul>
	);
}

const mapStateToProps = state => ({
	logs: state.log.logs,
	loading: state.log.loading,
});

export default connect(mapStateToProps, { getLogs })(Logs);
