import * as routes from '../constants/routes';

const initialState = {
  route: '',
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return {
        ...state,
        route: action.route,
      };

    default:
      return state;
  }
};

export default router;
