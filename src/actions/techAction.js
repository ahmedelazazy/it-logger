import axios from '../config/axios';
import { ADD_TECH, GET_TECHS, TECHS_ERROR, DELETE_TECH, SET_LOADING } from './types';

export const getTechs = () => async dispatch => {
	try {
		setLoading();

		const res = await axios.get('/techs');

		dispatch({
			type: GET_TECHS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.message,
		});
	}
};

export const addTech = tech => async dispatch => {
	try {
		setLoading();

		const res = await axios.post('/techs', tech);

		dispatch({
			type: ADD_TECH,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.message,
		});
	}
};

export const deleteTech = id => async dispatch => {
	try {
		setLoading();

		await axios.delete(`/techs/${id}`);

		dispatch({
			type: DELETE_TECH,
			payload: id,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: TECHS_ERROR,
			payload: err.message,
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
