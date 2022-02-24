import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducers";
import { toggleSideNav } from "src/app/store/sideNav/sidenav.actions";

@Component({
	selector: 'app-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
	}

	toggleSidenav() {
		this.store.dispatch(toggleSideNav());
	}

}
