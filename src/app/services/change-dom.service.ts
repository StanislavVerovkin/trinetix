import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDomService {

  changeTabs = false;
  changeFooterText = false;

  changeTabsFunc(event, px: number) {
    this.changeTabs = this._change(event, px);
  }

  changeFooterTextFunc(event, px: number) {
    this.changeFooterText = this._change(event, px);
  }

  private _change(event, px) {
    if (event && event.target.innerWidth <= px) {
      return true;
    } else {
      return window.innerWidth <= px;
    }
  }
}
