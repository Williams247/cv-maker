import { UPDATE_PERSONAL, INPUT_UPDATE, ADD_EXPERIENCE, EDIT_EXPERIENCE, DELETE_EXPERIENCE, ADD_EDUCATION, EDIT_EDUCATION, DELETE_EDUCATION, UPDATE_SKILLS } from "./Types";
import { parseMarkUpListToArray } from "./../utils/form";

const Reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        /**
         * General Reducers Actions
         */
        case INPUT_UPDATE:
            return {
                ...state,
                [payload.target]: payload.nest ? {
                    ...state[payload.target],
                    [payload.nest]: payload.value
                } : payload.value
            };

        /**
         * Personal Reducers Actions
         */
        case UPDATE_PERSONAL:
            return {
                ...state,
                personal: {
                    ...state.personal,
                    ...payload
                }
            }

        /**
         * Experience Reducers Actions
         */
        case ADD_EXPERIENCE:
            return {
                ...state,
                experience: [
                    ...state.experience,
                    {
                        ...payload,
                        description: parseMarkUpListToArray(payload.description)
                    }
                ]
            };
        case EDIT_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.map(
                    (exp, i) => i.toString() === payload.index ? {
                        ...payload.values, description: parseMarkUpListToArray(payload.values.description)
                    } : exp
                )
            }
        case DELETE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.filter((a, i) => i !== payload)
            }

        /**
         * Education Reducers Actions
         */
        case ADD_EDUCATION:
            return {
                ...state,
                education: [
                    ...state.education,
                    payload
                ]
            };
        case EDIT_EDUCATION:
            return {
                ...state,
                education: state.education.map(
                    (edu, i) => i.toString() === payload.index ? payload.values : edu
                )
            }
        case DELETE_EDUCATION:
            return {
                ...state,
                education: state.education.filter((a, i) => i !== payload)
            };

        /**
         * Skills
         */
        case UPDATE_SKILLS:
            return {
                ...state,
                skills: payload
            }

        default:
            return state;
    }
}

export default Reducer;