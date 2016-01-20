import {Page} from 'ionic/ionic';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {Page4} from '../page4/page4';
import {Page5} from '../page5/page5';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
    this.tab4Root = Page4;
    this.tab5Root = Page5;

  }
}
