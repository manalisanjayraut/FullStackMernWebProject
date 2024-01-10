import { Dispatch } from 'redux';
import { THEME_MODE } from '../constants/themeConstant.ts';

export const toggleActionTheme = () =>  {
    return({ type: THEME_MODE });
};