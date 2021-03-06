import ThemesActionTypes from './themes.types';

const INITIAL_STATE = {
  darkMode: false,
  lottieHeight: 100,
  lottieWidth: 100,
};

const themesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemesActionTypes.TOGGLE_DARK_MODE:
      console.log("Dark Mode :D");
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themesReducer;
