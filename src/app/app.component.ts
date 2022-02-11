import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { AppState } from "./app.reducer";
import { AppSelector } from "./app.selector";
import { routeTransitionAnimations } from "./route-transition-animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit {
	title = 'portfolio';
	showNavigation$: Observable<any>;
	@ViewChild('sidenav') sidenav: any;
	show = false;

	constructor(
		private router: Router,
		private store: Store<AppState>,
		private selector: AppSelector,

	) {
		this.showNavigation$ = this.store.pipe(
			select(this.selector.getShowNavigation()),
			tap(showNavigation => showNavigation)
		);

		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.sidenav.close();
			}
		});
	}

	ngOnInit(): void {
		this.showNavigation$.subscribe(res => console.log('res is ', res));
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animationState'];
	}

}
