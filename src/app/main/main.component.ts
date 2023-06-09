import {Component} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    books: any = [
        {bookName: "", bookDesc: "", bookStatus: "", isbn: "", bookAuthor: ""},
        {bookName: "", bookDesc: "", bookStatus: "", isbn: "", bookAuthor: ""}
    ]

}
