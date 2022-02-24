import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	loginForm: FormGroup;
	socialUser: SocialUser = new SocialUser();
	isLoggedin = false;

	constructor(
		private formBuilder: FormBuilder,
		private socialAuthService: SocialAuthService,
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit() {


		this.socialAuthService.authState.subscribe((user) => {
			this.socialUser = user;
			this.isLoggedin = (user != null);
			console.log(this.socialUser);
		});
	}

	loginWithGoogle(): void {
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	logOut(): void {
		this.socialAuthService.signOut();
	}

}
