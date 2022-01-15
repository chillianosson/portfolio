import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from "angularx-social-login";

import { AppMaterialModule } from "./app-material/app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { SidenavListComponent } from "./components/sidenav-list/sidenav-list.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		ToolbarComponent,
		HomeComponent,
		BlogComponent,
		SidenavListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		ReactiveFormsModule,
		SocialLoginModule
	],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
				autoLogin: false,
				providers: [
					{
						id: GoogleLoginProvider.PROVIDER_ID,
						provider: new GoogleLoginProvider(
							"390096752043-3oq42ub5dsu078e1o7dlalokeftn7ufh.apps.googleusercontent.com"
						)
					}
				]
			} as SocialAuthServiceConfig,
		}
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
