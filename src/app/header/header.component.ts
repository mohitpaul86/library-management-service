import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


    constructor() {
        this.defaultLanguageConfigLoader();
    }

    private defaultLanguageConfigLoader(): void {
    }

    ngOnInit(): void {
    }


    ngOnDestroy(): void {

    }

}
