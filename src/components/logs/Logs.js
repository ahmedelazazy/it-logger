import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

export default function Logs() {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
	}, []);

	const getLogs = async () => {
		try {
			setLoading(true);

			const res = await axios.get('/logs');
			setLogs(res.data);

			setLoading(false);
		} catch (error) {
			setLoading(false);
		}

		if (loading) {
			return <Preloader />;
		}
	};
	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>

			{logs.length === 0 ? <p className="center">No logs to show...</p> : logs.map(log => <LogItem key={log.id} log={log}></LogItem>)}
		</ul>
	);
}
