import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-question-tabs',
  templateUrl: './question-tabs.component.html',
  styleUrls: ['./question-tabs.component.css'],
})
export class QuestionTabsComponent implements OnInit {
  tabArray: string[] = [];
  questionArray: any[] = [];
  selectedIndex: number = 0;
  answerArray: any[] = [];
  user: any;
  endhour: any;
  endMinute: any;
  endSecond: any;
  startHour: any;
  startMinute: any;
  startSecond: any;
  totalMark: any;
  one: any;
  stage: any;
  role: any;
  role1: any;
  constructor(
    private router: ActivatedRoute,
    private adminService: AdminServiceService,
    private route: Router
  ) {}

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.role1 = localStorage.getItem('role1');
    this.adminService.getuserDetails().subscribe((res: any) => {
      console.log(res);
      this.totalMark = res.mark;
      console.log(this.totalMark);
    });
    this.router.queryParams.subscribe((params: any) => {
      //console.log(params);
      this.createTabArray(params.component);
    });
  }
  createTabArray(componentName: any) {
    switch (componentName) {
      case 'purpose':
        this.stage = 1;
        let purposeArray = ['Introduction', 'Engage With Concept'];
        this.tabArray = purposeArray;
        this.stage++;
        break;
      case 'connect to driver':
        console.log(this.stage);
        let connectToDriverArray = ['Buisness', 'Personal'];
        this.tabArray = connectToDriverArray;
        this.stage++;
        break;
      case 'Agree to Consider':
        let agreeToConsiderArray = ['Agree To Consider'];
        this.tabArray = agreeToConsiderArray;
        this.stage++;
        break;
      case 'Requirement':
        let requirementArray = ['Framework', 'Specifics', 'Importance'];
        this.tabArray = requirementArray;
        this.stage++;
        break;
      case 'Gap Analysis':
        let gapAnalysisArray = ['Ideal v current', 'Clarity'];
        this.tabArray = gapAnalysisArray;
        this.stage++;
        break;
      case 'Significance':
        let significanceArray = ['Loss & Gains', 'Reconnect to driver'];
        this.tabArray = significanceArray;
        this.stage++;
        break;
      case 'Solution':
        console.log(this.stage);
        let solutionArray = ['Overview', 'Critical issue'];
        this.tabArray = solutionArray;
        this.stage++;
        break;
      case 'Differentiate':
        console.log(this.stage);
        let differentiateArray = ['Common standards', 'Why You', 'Evidence'];
        this.tabArray = differentiateArray;
        this.stage++;
        break;
      case 'Reconnect to Driver':
        console.log(this.stage);
        let reconnectTodriversArray = ['Impact', 'Example'];
        this.tabArray = reconnectTodriversArray;
        this.stage++;
        break;
      case 'Concerns':
        console.log(this.stage);
        let concernsArray = ['Anticipate', 'Specifies'];
        this.tabArray = concernsArray;
        this.stage++;
        break;
      case 'Negotiation':
        console.log(this.stage);
        let negotiationArray = ['Agreement', 'Alternatives'];
        this.tabArray = negotiationArray;
        this.stage++;
        break;
      case 'Commit':
        console.log(this.stage);

        let commitArray = ['Summarise', 'Next Step'];
        this.tabArray = commitArray;
        this.stage++;
        break;
      case 'Reason to Move':
        console.log(this.stage);
        let reasonToMoveArray = ['Justify'];
        this.tabArray = reasonToMoveArray;
        this.stage++;
        break;

      case 'Decision to Move':
        console.log(this.stage);

        let decisionToMoveArray = ['Uncertain'];
        this.tabArray = decisionToMoveArray;
        this.stage++;
        break;
      case 'Consider Options':
        console.log(this.stage);
        let considerOptionsArray = ['Compare'];
        this.tabArray = considerOptionsArray;
        this.stage++;
        break;
      case 'Commits':
        console.log(this.stage);
        let comitArray = ['Anxieties'];
        this.tabArray = comitArray;
        this.stage++;
        break;
      case 'Trap1':
        console.log(this.stage);
        let trap1Array = ['Defend'];
        this.tabArray = trap1Array;
        this.stage++;
        break;
      case 'Trap2':
        console.log(this.stage);
        let trap2Array = ['Attention Elsewhere'];
        this.tabArray = trap2Array;
        this.stage++;
        break;
    }
    this.getQuestion(this.tabArray[0]);
  }
  selectedTab(event: any) {
    this.selectedIndex = event.index;
    this.getQuestion(event.tab.textLabel);
  }
  getQuestion(category: any) {
    this.adminService.getQuestion(category).subscribe((res) => {
      //console.log(res);
      let arr: any = res;
      this.questionArray = arr;
    });
  }
  onSave() {
    //console.log(this.answerArray);
    if (this.answerArray.length) {
      this.adminService.postAnswer(this.answerArray).subscribe((res) => {
        // console.log(res);
        this.answerArray = [];
      });
    }
    // alert('Saved Succesfully');
    this.selectedIndex++;
    if (this.selectedIndex > this.tabArray.length - 1) {
      switch (this.tabArray[this.tabArray.length - 1]) {
        case 'Engage With Concept':
          this.createTabArray('connect to driver');
          this.selectedIndex = 0;
          break;
        case 'Personal':
          this.createTabArray('Agree to Consider');
          this.selectedIndex = 0;
          break;
        case 'Agree To Consider':
          this.createTabArray('Reason to Move');
          this.selectedIndex = 0;
          break;
        case 'Justify':
          this.createTabArray('Trap1');
          this.selectedIndex = 0;
          alert('Stage 1 Completed');
          break;
        case 'Defend':
          this.createTabArray('Requirement');
          this.selectedIndex = 0;
          alert('Trap 1 Completed');
          break;
        case 'Importance':
          this.createTabArray('Gap Analysis');
          this.selectedIndex = 0;
          break;
        case 'Clarity':
          this.createTabArray('Significance');
          this.selectedIndex = 0;
          break;
        case 'Reconnect to driver':
          this.createTabArray('Decision to Move');
          this.selectedIndex = 0;
          break;
        case 'Uncertain':
          alert('Stage 2 Completed');
          this.createTabArray('Solution');
          this.selectedIndex = 0;
          break;
        case 'Critical issue':
          this.createTabArray('Differentiate');
          this.selectedIndex = 0;
          break;
        case 'Evidence':
          this.createTabArray('Reconnect to Driver');
          this.selectedIndex = 0;
          break;
        case 'Example':
          this.createTabArray('Consider Options');
          this.selectedIndex = 0;
          break;
        case 'Compare':
          alert('Stage 3 Completed');
          this.createTabArray('Trap2');
          this.selectedIndex = 0;
          break;
        case 'Attention Elsewhere':
          alert('Trap 2 Completed');
          this.createTabArray('Concerns');
          this.selectedIndex = 0;
          break;
        case 'Specifies':
          this.createTabArray('Negotiation');
          this.selectedIndex = 0;
          break;
        case 'Alternatives':
          this.createTabArray('Commit');
          this.selectedIndex = 0;
          break;
        case 'Next Step':
          this.createTabArray('Commits');
          this.selectedIndex = 0;
          break;
        case 'Anxieties':
          alert('Exam Saved Succesfully !!');
          this.route.navigateByUrl('loginpage');
          localStorage.clear();
          this.selectedIndex = 0;
          break;
      }
    }
    //console.log(this.selectedIndex);
  }
  onClick(opt: any, question: any) {
    let index = this.answerArray.findIndex(
      (ele) => ele.questionID === question._id
    );
    if (index == -1) {
      this.answerArray.push({
        questionID: question._id,
        question: question.question,
        option: opt.option,
        mark: opt.mark,
        user: localStorage.getItem('userId'),
        category: question.category,
      });
    } else {
      this.answerArray[index].option = opt.option;
      this.answerArray[index].mark = opt.amrk;
    }
  }
}
