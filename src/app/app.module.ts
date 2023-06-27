import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {UserComponent} from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedServicesModule} from "./shared/services.module";
import {MessagesModule} from "primeng/messages";
import {TableModule} from "primeng/table";
import {ChipsModule} from "primeng/chips";
import {LoginComponent} from './login/login.component';
import {BadgeModule} from "primeng/badge";
import {CalendarModule} from "primeng/calendar";
import {BookingsComponent} from './bookings/bookings.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        UserComponent,
        LoginComponent,
        BookingsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        SharedServicesModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MessagesModule,
        TableModule,
        ChipsModule,
        BadgeModule,
        CalendarModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
