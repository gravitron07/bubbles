export const BUBBLE_FORM_OPEN = 'bubbleMaker/BUBBLE_FORM_OPEN'
export const ADD_BUBBLE = 'bubbleMaker/ADD_BUBBLE'
export const NAME_UPDATED = 'bubbleMaker/NAME_UPDATED'
export const COLOR_UPDATED = 'bubbleMaker/COLOR_UPDATED'
export const BUBBLE_FORM_CLOSE = 'bubbleMaker/BUBBLE_FORM_CLOSE'
export const POP_BUBBLE = 'bubbleMaker/POP_BUBBLE'
export const ERROR_NAME = 'bubbleMaker/ERROR_NAME'

const initialState = {
  formOpen: false,
  color: '#f44336',
  name: '',
  bubbles: [],
  nameError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case BUBBLE_FORM_OPEN:
      return {
        ...state,
        name: '',
        color: '',
        formOpen: true,
        nameError: ''
      }

    case BUBBLE_FORM_CLOSE:
      return {
        ...state,
        formOpen: false
      }

    case ADD_BUBBLE:
      state.bubbles.push({
        name: state.name,
        color: state.color,
        id: state.bubbles.length + 1
      });

      return {
        ...state,
        name: state.name,
        color: state.color
      }

    case POP_BUBBLE:
      let updatedBubbles = state.bubbles.filter((i)=>{
        return (i.id !== action.id);
      });
      return {
        ...state,
        bubbles: updatedBubbles
      }

    case NAME_UPDATED:
      return {
        ...state,
        name: action.value,
        nameError:''
      }

    case COLOR_UPDATED:
      return {
        ...state,
        color: action.value
      }

    case ERROR_NAME:
      return {
        ...state,
        nameError: 'Please enter your name'
      }

    default:
      return state
  }
}

export const openForm = () => {
  return (dispatch => {
    dispatch({
      type: BUBBLE_FORM_OPEN
    })
  })
}

export const closeForm = () => {
  return (dispatch => {
    dispatch({
      type: BUBBLE_FORM_CLOSE
    })
  })
}

export const addBubble = (props, e) => {
  return (dispatch => {
    if (props.name !== '') {
      dispatch({
        type: BUBBLE_FORM_CLOSE
      })
      dispatch({
        type: ADD_BUBBLE
      })
      dispatch({
        type:'server/hello',
        data:'Hello!'
      })
    } else {
      dispatch({
        type: ERROR_NAME
      })
    }
  })
}

export const updateName = (e) =>{
  return (dispatch => {
    dispatch({
      type: NAME_UPDATED,
      value: e.target.value
    })
  })
};

export const updateColor = (e) =>{
  return (dispatch => {
    dispatch({
      type: COLOR_UPDATED,
      value: e.target.value
    })
  })
};

export const popBubble = (e,id) =>{
  return (dispatch => {
    dispatch({
      type: POP_BUBBLE,
      id: e
    })
  })
};
