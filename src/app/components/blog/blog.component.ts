import { ChangeDetectionStrategy, Component, HostListener, OnInit } from "@angular/core";
import { fadeAnimation, listAnimation } from "src/app/route-transition-animations";

import { item1, item2 } from "./const";

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [fadeAnimation, listAnimation]
})
export class BlogComponent implements OnInit {

	screenHeight = 0;
	screenWidth = 0;

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.screenHeight = window.innerHeight - 41;
	}

	items = [
		item1,
		item2
	];

	constructor() {
		this.onResize();
	}

	ngOnInit(): void {
	}

}
