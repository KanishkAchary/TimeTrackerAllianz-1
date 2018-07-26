import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColumnApi, GridApi, GridOptions } from "ag-grid/main";
import { ServiceComponent } from "../service/service.component";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  email: string;
  userData = {};
  private gridOptions: GridOptions;
  private api: GridApi;
  private columnApi: ColumnApi;
  re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  private columnDefs = [
    { headerName: 'Email', field: 'email' },
    { headerName: 'In Time', field: 'start' },
    { headerName: 'OutTime', field: 'end' }
  ];
  rowData: any;

  constructor(private recordsService: ServiceComponent, public datepipe: DatePipe) {
    this.gridOptions = <GridOptions>{},
      this.getAllRecords();

  }
  newTimeTrack() {
    this.userData = {};
  }
  onReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }
  ngOnInit() {
  }
  getRecords() {
    if (!this.validateMail(this.email)) {
      this
        .recordsService
        .getRecords(this.email)
        .subscribe((data: any) => {
          this.rowData = data;

        });
    }
  }
  saveTimeTrack() {
    // let postData = {};
    // postData['email'] = this.userData['email'];
    // postData['start'] = this.datepipe.transform(this.userData['start'], 'yyyy-MM-dd HH:mm');
    // postData['end'] = this.datepipe.transform(this.userData['end'], 'yyyy-MM-dd HH:mm');
    this.recordsService.postRecords(this.userData).subscribe((data: any) => {
      this.getAllRecords();
    })
  }
  getAllRecords() {
    this
      .recordsService
      .getAllRecords()
      .subscribe((data: any) => {
        this.rowData = data;

      });
  }
  validateMail(email: any) {
    if (email)
      if (this.re.test(String(email).toLowerCase())) {
        return false;
      }
      else {
        return true;
      }
  }

}


