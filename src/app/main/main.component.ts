import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book.model";
import {DataService} from "../shared/data-service";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";
import {BookingService} from "../shared/booking.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    books: Book[] = []
    filteredBooks: Book [] = []
    Subscription1$: Subscription = new Subscription();
    Subscription2$: Subscription = new Subscription();

    users: any;

    bookingForm = new FormGroup({
        bookTitle: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        dateOfReturn: new FormControl('')
    });

    constructor(private readonly httpClient: HttpClient, private readonly dataService: DataService,
                private readonly messageService: MessageService,
                private readonly userService: UserService,

                private readonly bookingService: BookingService,
                private readonly router: Router) {
        this.Subscription1$ = this.httpClient.get('assets/data/bookData.json').subscribe(data => {
            // @ts-ignore
            this.books = data
            // @ts-ignore
            this.filteredBooks = data
        });
    }

    ngOnInit() {
        this.Subscription2$ = this.dataService.data$.subscribe(searchTeam => {
            this.filteredBooks = this.books.filter(book => book.bookTitle.toLowerCase().includes(searchTeam.toLowerCase())
                || book.isbn13.includes(searchTeam) || book.isbn10.includes(searchTeam));
        });

        this.userService.getUsers('users').then(data => {
            data.subscribe(options => {
                this.users = options;
            });
        });


    }

    getSubstring(startIndex: number, endIndex: number, originalString: string): string {
        return originalString.substring(startIndex, endIndex).concat("...");
    }

    ngOnDestroy(): void {
        this.Subscription1$.unsubscribe();
        this.Subscription2$.unsubscribe();
    }


    bookNow(bookId: string, bookTitle: string) {
        this.bookingForm.controls['bookTitle'].setValue(bookTitle);
    }

    assignNow() {
        this.bookingService.createBooking(this.bookingForm.value).then(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Booking has created successfully...'
            });
        });
        setTimeout(() => {
            this.messageService.clear()
        }, 3000);
    }
}
