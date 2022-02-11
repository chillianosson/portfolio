import { createReducer, on } from "@ngrx/store";

import { toggleNavigation } from "./AppActions";

export interface AppState {
	showNavigation: boolean;
}

export const initialState: AppState = {
	showNavigation: false
};

export const AppReducer = createReducer(
	initialState,
	on(toggleNavigation, (state) => ({
		...state,
		showNavigation: !state.showNavigation
	}))
);
