import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable()
export class BookingService {


    constructor(private readonly http: HttpClient, private readonly afs: AngularFirestore) {
    }

    getAllBookings(): Observable<any> {
        return this.afs.collection('bookings').valueChanges();
    }

    createBooking(assignmentData: any) {
        return this.afs.collection('bookings').doc(assignmentData.username).set(assignmentData);
    }
}
