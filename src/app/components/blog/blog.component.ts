import { ChangeDetectionStrategy, Component, HostListener, OnInit } from "@angular/core";

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit{

	screenHeight = 0;
	screenWidth = 0;


	@HostListener('window:resize', ['$event'])
	onResize() {
		this.screenHeight = window.innerHeight;
	}

	items = [
		"I build large scale applications primarily with Angular, in JavaScript, for desktop, tablet, mobile or server.Combined with a background in UX and design means I have now the ability to take applications from conception to completion autonomously."
	];

	constructor() {
		this.onResize();
	}

	ngOnInit(): void {
	}

}
