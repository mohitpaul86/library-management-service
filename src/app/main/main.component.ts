import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book.model";
import {DataService} from "../shared/data-service";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";

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

    constructor(private readonly httpClient: HttpClient, private readonly dataService: DataService, private readonly messageService: MessageService) {
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

    }

    getSubstring(startIndex: number, endIndex: number, originalString: string): string {
        return originalString.substring(startIndex, endIndex).concat("...");
    }

    ngOnDestroy(): void {
        this.Subscription1$.unsubscribe();
        this.Subscription2$.unsubscribe();
    }


    bookNow(bookId: string) {
        console.log("Book ID" + bookId);
    }
}
