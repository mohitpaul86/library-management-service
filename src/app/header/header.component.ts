import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../shared/data-service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    searchTerm: string = '';


    constructor(private dataService: DataService) {
        this.defaultLanguageConfigLoader();
    }

    private defaultLanguageConfigLoader(): void {
    }

    ngOnInit(): void {
    }

    searchBook() {
        this.dataService.sendData(this.searchTerm);
    }


    ngOnDestroy(): void {

    }

}
