import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    loginForm = new FormGroup({
        username: new FormControl('',[Validators.email, Validators.required]),
        password: new FormControl('', Validators.required)
    });

    validateUser(){
      console.log(this.loginForm.value)
    }
}
