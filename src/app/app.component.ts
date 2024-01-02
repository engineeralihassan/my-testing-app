import { Component } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
// import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
// import {
//   GoogleLoginProvider,

// } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-testing-app';

  user!: SocialUser;
  loggedIn!: boolean;
  directionObj={
    direction: 'ttb',
    height   : '10rem',
    wheel    : true,
    }

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("The user is",user);
    });
  }

  

  // singInWithGoogle(){
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }
}
