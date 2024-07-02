import { createAction, props } from '@ngrx/store';

export const setActionHeader = createAction(
  '[ActionHeader] Set Action Header',
  props<{ buttonText: string; buttonClickHandler: () => void }>()
);
