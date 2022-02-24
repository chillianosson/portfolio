import { Action, createReducer, on } from "@ngrx/store";

import * as LoginPageActions from "./login-page.actions";

export interface LoginState {
	username: string;
	password: string;
}

export const initialState: LoginState = {
	username: "",
	password: ""
};

export const loginReducer = createReducer(
	initialState,
	on(LoginPageActions.login, (state, { username, password }) => ({ ...state, username, password })),
);