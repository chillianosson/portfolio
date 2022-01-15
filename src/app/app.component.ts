import { Component, ViewChild } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";

import { routeTransitionAnimations } from "./route-transition-animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
	title = 'portfolio';
	@ViewChild('sidenav') sidenav: any;


	constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.sidenav.close();
			}
		});

	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animationState'];
	}

}
