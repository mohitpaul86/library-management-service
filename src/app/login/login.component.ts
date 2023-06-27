import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {LoginService} from "../shared/login.service";
import {DataService} from "../shared/data-service";
import {UsernameService} from "../shared/username-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private readonly userService: UserService,
                private readonly messageService: MessageService,
                private readonly loginService: LoginService,
                private readonly dataService: DataService,
                private readonly usernameService: UsernameService,
                private readonly router: Router) {
        this.loginService.setLoginState(false).then(() => {
        });
    }

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', Validators.required)
    });

    validateUser() {
        console.log(this.loginForm.value.username);
        this.userService.getAdminUser("admin_users", this.loginForm.value.username!!.toString()).then(data => data.subscribe(user => {
            if (user && (this.loginForm.value.username === user.username && this.loginForm.value.password === user.password)) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'User Logged In....'
                });
                this.router.navigate(['/main']);
                this.usernameService.sendData(user.lastName + ', ' + user.firstName);
                this.loginService.setLoginState(true).then(() => {
                });
            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'User details not found...Please try again.'
                });
            }
        }));
        setTimeout(() => {
            this.messageService.clear()
        }, 3000);

    }
}
