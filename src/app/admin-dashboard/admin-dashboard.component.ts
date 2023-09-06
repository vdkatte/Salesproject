import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  userDetails: any[] = [];
  endTime: any;
  startTime: any;
  timeTaken: any;
  EXCEL_TYPE =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';
  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.adminService.getuserDetails().subscribe((res: any) => {
      console.log(res);
      this.userDetails = res.map((ele: any) => {
        let endTime = new Date(ele.endTime);
        let startTime = new Date(ele.startTime);
        this.timeTaken = endTime.getTime() - startTime.getTime();
        // console.log(this.timeTaken);
        var msec = this.timeTaken;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        // console.log(hh + ':' + mm + ':' + ss);
        this.timeTaken = hh + ':' + mm + ':' + ss;
        return {
          ...ele,
          timeTaken: this.timeTaken,
        };
      });
    });
  }
  public exportAsExcelFile(): void {
    let jsonArray1 = this.userDetails.map((ele: any) => {
      return {
        Name: ele.user.fullName,
        Mark: ele.mark,
        Time_Taken: this.timeTaken,
        Submited_On: `${new Date(ele.endTime).getDate()}-${
          new Date(ele.endTime).getMonth() + 1
        }-${new Date(ele.endTime).getFullYear()}`,
      };
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonArray1);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'All Users Rusult');
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName +
        '_' +
        `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()} ` +
        this.EXCEL_EXTENSION
    );
  }
}
