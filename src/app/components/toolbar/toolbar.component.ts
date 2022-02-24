import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleSideNav } from "src/app/store/sideNav/sidenav.actions";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	@Output() SideNavToggle = new EventEmitter();

	constructor(private store: Store) { }

	toggleSidenav() {
		this.store.dispatch(toggleSideNav());
	}

}