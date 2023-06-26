import {Component} from '@angular/core';
import {BookingService} from "../shared/booking.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

    bookings: any;

    constructor(private readonly bookingService: BookingService, private readonly messageService: MessageService) {
    }

    ngOnInit() {
        this.bookingService.getAllBookings().subscribe(bookings => {
            this.bookings = bookings
        });
    }

    getSubstring(startIndex: number, endIndex: number, originalString: string): string {
        return originalString.substring(startIndex, endIndex).concat("...");
    }

    returnBook(bookingID: any) {
        //const index = this.bookings.findIndex((book: any) => book.bookingId === booking.bookingId);
        //this.bookings.splice(index, 1);
        this.bookingService.returnBook(bookingID).then(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Book has returned successfully...'
            });
        });
    }
}
