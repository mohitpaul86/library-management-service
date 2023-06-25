import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {BookingsComponent} from "./bookings/bookings.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'booking', component: BookingsComponent},
    {path: 'main', component: MainComponent},
    {path: 'users', component: UserComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
