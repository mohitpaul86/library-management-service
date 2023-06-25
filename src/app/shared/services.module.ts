import {NgModule} from '@angular/core';
import {FirebaseDataService} from './firebasedata.service';
import {MessageService} from 'primeng/api';
import {DataService} from "./data-service";
import {UserService} from "./user.service";
import {LoginService} from "./login.service";
import {BookingService} from "./booking.service";

@NgModule({
    providers: [
        FirebaseDataService,
        MessageService,
        DataService,
        UserService,
        LoginService,
        BookingService
        ]
})
export class SharedServicesModule {
}
