import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDomService {

  changeTabs = false;
  changeFooterText = false;

  changeTabsFunc(event, px: number) {
    if (event && event.target.innerWidth <= px) {
      this.changeTabs = true;
    } else {
      this.changeTabs = window.innerWidth <= px;
    }
  }

  changeFooterTextFunc(event, px: number) {
    if (event && event.target.innerWidth <= px) {
      this.changeFooterText = true;
    } else {
      this.changeFooterText = window.innerWidth <= px;
    }
  }
}
