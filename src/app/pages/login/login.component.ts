import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { AuthResponseData, AuthService } from 'src/app/auth/auth..service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<any>();
  faLightbulb = faLightbulb;
  isLoginMode = false;
  error: string = "";

  constructor(private authService: AuthService, private router: Router){

  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password; 
    let authObs: Observable<AuthResponseData>;

      if(this.isLoginMode){
        authObs = this.authService.login(email, password);
      }
      else{      
        authObs = this.authService.signup(email, password);
      }

      authObs.subscribe(
        resData=> {
          console.log(resData);
          this.router.navigate(['./home']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
        }
      );
  }
}
