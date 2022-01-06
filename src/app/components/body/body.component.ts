import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
	@Input() displayMenu = false;
	constructor() { }

	ngOnInit(): void {
	}

}
