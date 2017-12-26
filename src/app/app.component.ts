import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  list = [
    { route: 'blog', name: '我的博客' },
    { route: 'camera', name: '随便拍拍' },
    { route: 'dogFood', name: 'dog food' },
    { route: 'about', name: '关于我' },
  ];
  constructor(public translate: TranslateService) {
    this.initTranslate();
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
      // this.translate.setDefaultLang('en');
      if (this.translate.getBrowserLang() !== undefined) {
        this.translate.use(this.translate.getBrowserLang());
      } else {
        this.translate.use('en'); // Set your language here
      }
  }
  ngOnInit(): void {
  //   console.log(this.translate.getBrowserLang());
  //   this.translate.addLangs(['zh', 'en']);
  //   this.translate.setDefaultLang('zh-CN');
  //   const browserLang = this.translate.getBrowserLang();
  //    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  // }
}
}

