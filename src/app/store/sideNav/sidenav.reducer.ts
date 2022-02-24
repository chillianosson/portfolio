import { createReducer, createSelector, on } from "@ngrx/store";

import * as SideNavPageActions from "./sidenav.actions";

export interface SideNavState {
	open: boolean;
}

export const initialState: SideNavState = {
	open: false
};

export const sideNavReducer = createReducer(
	initialState,
	on(SideNavPageActions.toggleSideNav, state => ({ ...state, open: !state.open })),
);

