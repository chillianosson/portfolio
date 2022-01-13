import { Component, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'portfolio';
	@ViewChild('sidenav') sidenav:any;


	constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.sidenav.close();
			}
		});
	}

}
