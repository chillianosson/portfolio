import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
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
		MatCardModule
	],
	exports: [
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatGridListModule,
		MatDividerModule,
		MatSidenavModule,
		MatCardModule
	]
})
export class AppMaterialModule { }
