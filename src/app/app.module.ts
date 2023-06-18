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
import {DataService} from "./data-service";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

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
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        AgGridModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
