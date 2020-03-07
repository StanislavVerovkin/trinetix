import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ChangeDomService } from '../../services/change-dom.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  @HostListener('window:resize', [ '$event' ])
  onChange(event?: any) {
    this.changeDomService.changeTabsFunc(event, 800);
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
