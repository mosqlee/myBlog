import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  constructor() { }


  ngOnInit() {
    // console.log(this.translate);
    // const broswerLang = this.translate.getBrowserLang();
    // console.log(broswerLang);
    // this.translate.use(broswerLang.match(/en|zh-CN/) ? broswerLang : 'zh-CN');
  }
}
