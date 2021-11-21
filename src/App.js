import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		M.AutoInit();
	}, []);

	return <div className="App">My App</div>;
}

export default App;
