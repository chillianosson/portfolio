import { Injectable } from "@angular/core";

import { AppState } from "./app.reducer";

@Injectable({
	providedIn: "root"
})
export class AppSelector {

	getShowNavigation() {
		return (state: AppState) => state.showNavigation;
	}

}