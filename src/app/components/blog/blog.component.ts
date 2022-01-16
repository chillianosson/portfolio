import { ChangeDetectionStrategy, Component, HostListener, OnInit } from "@angular/core";

import { item1 } from "./const";

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {

	screenHeight = 0;
	screenWidth = 0;


	@HostListener('window:resize', ['$event'])
	onResize() {
		this.screenHeight = window.innerHeight - 41;
	}

	items = [
		item1
	];

	constructor() {
		this.onResize();
	}

	ngOnInit(): void {
	}

}
