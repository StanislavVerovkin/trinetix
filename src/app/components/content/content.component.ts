import { Component, HostListener, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ChangeDomService } from '../../services/change-dom.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.scss' ]
})
export class ContentComponent implements OnInit {

  @HostListener('window:resize', [ '$event' ])
  onChange(event?: any) {
    this.changeDomService.changeFooterTextFunc(event, 400);
  }

  constructor(
    public mockDataService: MockDataService,
    public changeDomService: ChangeDomService
  ) {
  }

  ngOnInit() {
    this.onChange();
  }

}
