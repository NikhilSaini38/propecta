import { Injectable } from '@angular/core';
import { IntroJs, Step } from 'intro.js';

@Injectable({
  providedIn: 'root',
})
export class WalkthroughService {
  controller: IntroJs = require('intro.js')();
  private walkthroughEnabled = false;
  enable() {
    this.walkthroughEnabled = true;
  }
  disable() {
    this.walkthroughEnabled = false;
  }
  safeStart() {
    if (this.walkthroughEnabled) this.controller.start();
  }
}
