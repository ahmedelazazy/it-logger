import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TechItem from './TechItem';

export default function TechListModal() {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTechs();
	}, []);

	const getTechs = async () => {
		try {
			setLoading(true);

			const res = await axios.get('/techs');
			setTechs(res.data);

			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};
	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">{!loading && techs.map(tech => <TechItem key={tech.id} tech={tech} />)}</ul>
			</div>
		</div>
	);
}
