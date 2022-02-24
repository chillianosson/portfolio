import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

import { loginReducer, LoginState } from "../login-page/login-page.reducer";
import { sideNavReducer, SideNavState } from "../sideNav/sidenav.reducer";

export interface AppState {
	router: RouterReducerState,
	login: LoginState,
	sideNav: SideNavState
}

export const reducers: ActionReducerMap<AppState> = {
	router: routerReducer,
	login: loginReducer,
	sideNav: sideNavReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
export const selectSideNavState = (state: AppState) => state.sideNav.open;
