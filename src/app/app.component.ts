import { Component, OnDestroy, OnInit } from "@angular/core";
import { Event, NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";

import { routeTransitionAnimations } from "./route-transition-animations";
import { AppState, selectSideNavState } from "./store/reducers";
import { toggleSideNav } from "./store/sideNav/sidenav.actions";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'portfolio';
	show = false;
	sideBarOpened$: Observable<boolean>;

	constructor(
		private store: Store<AppState>,
		private router: Router
	) {
		// sidebar toggle behaviour
		this.sideBarOpened$ = this.store.select(selectSideNavState);
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {

	}

	prepareRoute(outlet: RouterOutlet) {
		// animation for route changes
		return outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animationState'];
	}


}
