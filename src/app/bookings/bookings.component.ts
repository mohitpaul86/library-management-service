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
        this.bookingService.getAllBookings().subscribe(bookingsData => this.bookings = bookingsData)
    }

  getSubstring(startIndex: number, endIndex: number, originalString: string): string {
    return originalString.substring(startIndex, endIndex).concat("...");
  }

}
