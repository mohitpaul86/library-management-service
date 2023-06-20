import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {UserComponent} from './user/user.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedServicesModule} from "./shared/services.module";
import {MessagesModule} from "primeng/messages";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        AgGridModule,
        FormsModule,
        SharedServicesModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MessagesModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
