import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';

  constructor(private analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.analytics.logEvent('app_open', {
      content_type: 'image',
      content_id: 'P12453'
    });
  }
}
