import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  recordsUrl = window.location.origin + '/records';
  getAllRecords() {
    return this
      .http
      .get(this.recordsUrl);
  }
  getRecords(email: any) {
    return this
      .http
      .get(this.recordsUrl + '?email=' + email);
  }

  postRecords(data: any) {
    let formData: FormData = new FormData();
    formData.append('email', data.email);
    formData.append('start', data.start);
    formData.append('end', data.end);
    return this.http.post(this.recordsUrl, formData);
  }
}
