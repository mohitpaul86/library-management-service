import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../shared/data-service";
import {UserService} from "../shared/user.service";
import {LoginService} from "../shared/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    searchTerm: string = '';
    loginState: boolean | undefined

    constructor(private dataService: DataService, private readonly userService: UserService,
                private readonly loginService: LoginService,
                private readonly router: Router) {
        this.getLoginState();
        this.defaultLanguageConfigLoader();
    }

    private defaultLanguageConfigLoader(): void {
    }

    ngOnInit(): void {
    }

    searchBook() {
        this.dataService.sendData(this.searchTerm);
    }

    validateAdminUser() {
        this.userService.getAdminUsers('admin_users').then(users => {
            console.log(users)
        });
    }

    getLoginState() {
        this.loginService.getLoginState().then(state => state.subscribe(actualState => {
            if (actualState) {
                this.loginState = actualState.isLogin!!;
            }
        }));
    }

    logout() {
        this.loginService.setLoginState(false).then(() => console.log("State has set as false"));
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {

    }

}
