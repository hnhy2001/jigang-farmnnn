import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionHeaderState } from './reducer';

export const selectActionHeaderState =
  createFeatureSelector<ActionHeaderState>('actionHeader');

export const selectButtonText = createSelector(
  selectActionHeaderState,
  (state: ActionHeaderState) => state.buttonText
);

export const selectButtonClickHandler = createSelector(
  selectActionHeaderState,
  (state: ActionHeaderState) => state.buttonClickHandler
);
