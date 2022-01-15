import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from "./components/blog/blog.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: { animationState: 'One' } },
	{ path: 'blog', component: BlogComponent, data: { animationState: 'Two' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
