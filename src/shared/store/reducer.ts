import { createReducer, on } from '@ngrx/store';
import { setActionHeader } from './action';

export interface ActionHeaderState {
  buttonText: string;
  buttonClickHandler: () => void;
}

export const initialState: ActionHeaderState = {
  buttonText: '',
  buttonClickHandler: () => {},
};

export const actionHeaderReducer = createReducer(
  initialState,
  on(setActionHeader, (state, { buttonText, buttonClickHandler }) => ({
    ...state,
    buttonText,
    buttonClickHandler,
  }))
);
