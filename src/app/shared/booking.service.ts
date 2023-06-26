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
        assignmentData.bookingId = this.makeid(5);
        return this.afs.collection('bookings').doc(assignmentData.bookingId).set(assignmentData);
    }

    returnBook(bookingID: any): Promise<void> {
        return this.afs.collection('bookings').doc(bookingID).delete();
    }

    makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
