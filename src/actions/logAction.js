import axios from '../config/axios';
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS } from './types';

export const getLogs = () => async dispatch => {
	try {
		setLoading();

		const res = await axios.get('/logs');

		dispatch({
			type: GET_LOGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.repsonse.data,
		});
	}
};

export const addLog = log => async dispatch => {
	try {
		setLoading();

		const res = await axios.post('/logs', log);

		dispatch({
			type: ADD_LOG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.repsonse.data,
		});
	}
};

export const updateLog = log => async dispatch => {
	try {
		setLoading();

		const { id } = log;
		const res = await axios.put(`/logs/${id}`, log);

		dispatch({
			type: UPDATE_LOG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.repsonse.data,
		});
	}
};

export const deleteLog = id => async dispatch => {
	try {
		setLoading();

		await axios.delete(`/logs/${id}`);

		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.repsonse.data,
		});
	}
};

export const searchLogs = text => async dispatch => {
	try {
		setLoading();

		const res = await axios.get(`/logs?q=${text}`);

		dispatch({
			type: SEARCH_LOGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.repsonse.data,
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const setCurrent = id => {
	return {
		type: SET_CURRENT,
		payload: id,
	};
};

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};
