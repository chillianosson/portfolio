import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { routeTransitionAnimations } from "./route-transition-animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit {
	title = 'portfolio';
	@ViewChild('sidenav') sidenav: any;
	show = false;

	constructor(
	) {
	}

	ngOnInit(): void {
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animationState'];
	}

}
