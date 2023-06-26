import {Component} from '@angular/core';
import {BookingService} from "../shared/booking.service";

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

    bookings: any;

    constructor(private readonly bookingService: BookingService) {
    }

    ngOnInit() {
        this.bookingService.getAllBookings().subscribe(bookings => {
            this.bookings = bookings
        });
    }

    getSubstring(startIndex: number, endIndex: number, originalString: string): string {
        return originalString.substring(startIndex, endIndex).concat("...");
    }

    returnBook(booking: any) {
        console.log(booking);
        const filteredBookings =  this.bookings.map((book: any) => book.bookTitle === booking.bookTitle && book.username === booking.username);
        console.log(filteredBookings);
    }
}
