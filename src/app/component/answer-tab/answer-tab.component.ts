import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css'],
})
export class AnswerTabComponent {
  answerArray: any[] = [];
  ansArray: any;
  userid: any;
  EXCEL_TYPE =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';

  constructor(
    private adminService: AdminServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      console.log(params);
      this.userid = params.userID;
      this.getAnswer();

      console.log(this.answerArray);
    });
  }
  getAnswer() {
    this.adminService.getAnswer().subscribe((res: any) => {
      console.log(res);

      this.ansArray = res;
      this.answerArray = [...this.ansArray].filter(
        (ele) => this.userid === ele.user._id
      );
      console.log(this.answerArray);
    });
  }
  public exportAsExcelFile(): void {
    console.log(this.answerArray);

    let jsonArray = this.answerArray.map((ele: any) => {
      return {
        Name: ele.user.fullName,
        Category: ele.category,
        Question: ele.question,
        Answer: ele.option,
        Mark: ele.mark,
        Submited_On: `${new Date(ele.time).getDate()}-${
          new Date(ele.time).getMonth() + 1
        }-${new Date(ele.time).getFullYear()}`,
      };
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonArray);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, jsonArray[0].Name);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName +
        '_' +
        `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}` +
        this.EXCEL_EXTENSION
    );
  }
}
