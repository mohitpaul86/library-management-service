import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../shared/data-service";
import {UserService} from "../shared/user.service";
import {LoginService} from "../shared/login.service";
import {Router} from "@angular/router";
import {UsernameService} from "../shared/username-service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    searchTerm: string = '';
    loginState: boolean | undefined

    user = localStorage.getItem('user');

    constructor(private dataService: DataService,
                private readonly userService: UserService,
                private readonly usernameService: UsernameService,
                private readonly loginService: LoginService,
                private readonly router: Router) {
        this.getLoginState();
        this.defaultLanguageConfigLoader();
    }

    private defaultLanguageConfigLoader(): void {
    }

    ngOnInit(): void {
        this.usernameService.data$.subscribe(user => {
            this.user = user;
            if (user) localStorage.setItem('user', this.user);
        });

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

    validateLoginState() {
        if (this.loginState) {
            this.router.navigate(['/main'])
        } else {
            this.router.navigate(['/login'])
        }
    }

    logout() {
        this.loginService.setLoginState(false).then(() => {
            localStorage.clear();
        });
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {
    }
}
