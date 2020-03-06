import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor(
        public mockDataService: MockDataService
    ) {
    }

    ngOnInit() {
    }

}
