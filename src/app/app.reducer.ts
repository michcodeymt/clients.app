import {Action} from "@ngrx/store";

export interface appState {
  txt: string
}

export const initialState = {
  txt : 'Michcode'
}

export function reducer(state: appState = initialState, action: Action) {
  console.log(action)
}
