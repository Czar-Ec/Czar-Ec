import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public markDownSrc = '';

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.http.get('assets/README.md', { responseType: 'text' }).subscribe(res => {
      this.markDownSrc = res;
    },
      err => {
        console.log('Could not find README');
        console.log(err);
      });
  }
}
