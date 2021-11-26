import { ADD_TECH, GET_TECHS, TECHS_ERROR, DELETE_TECH, SET_LOADING } from '../actions/types';

const initialState = {
	techs: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_TECHS:
			return {
				...state,
				techs: payload,
				loading: false,
			};

		case ADD_TECH:
			return {
				...state,
				techs: [...state.techs, payload],
				loading: false,
			};

		case DELETE_TECH:
			return {
				...state,
				techs: state.techs.filter(tech => tech.id !== payload),
				loading: false,
			};

		case TECHS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
