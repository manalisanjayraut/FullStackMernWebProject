import { THEME_MODE } from "../constants/themeConstant.ts";
 
interface ModeState {
  toggleActive: boolean;
  mode: string;
}
 
interface ModeAction {
  type: string;
}
 
const initialState: ModeState = {
  toggleActive: true,
  mode: "light",
};
 
const modeReducer = (
  state: ModeState = initialState,
  action: ModeAction
): ModeState => {
  switch (action.type) {
    case THEME_MODE:
      return {
        ...state,
        toggleActive: !state.toggleActive,
        mode: state.toggleActive ? "light" : "dark",
      };
 
    default:
      return state;
  }
};
 
export default modeReducer;
 