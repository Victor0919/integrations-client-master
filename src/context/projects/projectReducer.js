import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  ERROR_PROJECTS,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false
      }
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      }
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          project => project._id === action.payload
        )
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        ),
        project: null
      }
    case ERROR_PROJECTS:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}
