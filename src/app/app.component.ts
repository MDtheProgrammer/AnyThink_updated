import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth..service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AnyThink';
  faCoffee = faCoffee;
  
  isAuthenticated = false;
  private userSub: Subscription = new Subscription;
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
