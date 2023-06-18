import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book.model";
import {DataService} from "../data-service";
import {Subscription} from "rxjs";

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


    constructor(private readonly httpClient: HttpClient, private readonly dataService: DataService) {
    }

    ngOnInit() {
        this.Subscription1$ = this.httpClient.get('assets/data/bookData.json').subscribe(data => {
            // @ts-ignore
            this.books = data
        });

        this.Subscription2$ = this.dataService.data$.subscribe(searchTeam => {
            console.log("SearchTeam:" + searchTeam)
            this.books.filter(book => book.bookTitle === searchTeam);
        });
    }

    getSubstring(startIndex: number, endIndex: number, originalString: string): string {
        return originalString.substring(startIndex, endIndex).concat("...");
    }

    ngOnDestroy(): void {
        this.Subscription1$.unsubscribe();
        this.Subscription2$.unsubscribe();
    }


}
