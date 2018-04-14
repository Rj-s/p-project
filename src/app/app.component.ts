import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  vmDetail = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/json/data.json').subscribe(res => {
      this.vmDetail = res.json();
    });
  }

}
