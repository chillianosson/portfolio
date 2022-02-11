import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatGridListModule,
		MatDividerModule,
		MatSidenavModule,
		MatCardModule,
		ScrollingModule,
		MatExpansionModule
	],
	exports: [
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatGridListModule,
		MatDividerModule,
		MatSidenavModule,
		MatCardModule,
		ScrollingModule,
		MatExpansionModule
	]
})
export class AppMaterialModule { }
