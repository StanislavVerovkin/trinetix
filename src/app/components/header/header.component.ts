import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    resize = false;

    @HostListener('window:resize', ['$event'])
    onResize(event?: any) {
        if (event && event.target.innerWidth <= 800) {
            this.resize = true;
        } else {
            this.resize = window.innerWidth <= 800;
        }
    }

    constructor(
        public mockDataService: MockDataService
    ) {
    }

    ngOnInit() {
        this.onResize();
    }
}
