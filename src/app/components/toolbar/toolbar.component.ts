import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleNavigation } from "src/app/AppActions";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	@Output() SideNavToggle = new EventEmitter();

	constructor(private store: Store<{ showNavigation: boolean }>) { }

	toggleSidenav() {
		this.store.dispatch(toggleNavigation());
	}

}