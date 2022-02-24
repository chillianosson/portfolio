import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from "angularx-social-login";

import { environment } from "../environments/environment";

import { AppMaterialModule } from "./app-material/app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { CovidComponent } from "./components/covid/covid.component";
import { HomeComponent } from "./components/home/home.component";
import { SidenavListComponent } from "./components/sidenav-list/sidenav-list.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { metaReducers, reducers } from "./store/reducers";

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		HomeComponent,
		BlogComponent,
		SidenavListComponent,
		CovidComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AppMaterialModule,
		ReactiveFormsModule,
		SocialLoginModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot(
			{ stateKey: 'router' }
		)
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
