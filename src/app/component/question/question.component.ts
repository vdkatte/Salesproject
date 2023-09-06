import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questionArray: [] = [];
  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {}
  getQuestion(category: any) {
    this.adminService.getQuestion(category).subscribe((res: any) => {
      console.log(res);
      this.questionArray = res;
      console.log(this.questionArray);
    });
  }
}
