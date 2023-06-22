import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserFormComponent } from './component/admin-user-form/admin-user-form.component';
import { QuestionTabsComponent } from './component/question-tabs/question-tabs.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { Trap1Component } from './component/trap1/trap1.component';
import { Trap2Component } from './component/trap2/trap2.component';
import { ComitComponent } from './component/comit/comit.component';
import { ConsiderOptionsComponent } from './component/consider-options/consider-options.component';
import { DecisionToMoveComponent } from './component/decision-to-move/decision-to-move.component';
import { ReasonToMoveComponent } from './component/reason-to-move/reason-to-move.component';
import { CloseComponent } from './component/close/close.component';
import { PresentSolutionsComponent } from './component/present-solutions/present-solutions.component';
import { DevelopNeedsComponent } from './component/develop-needs/develop-needs.component';

import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AnswerTabComponent } from './component/answer-tab/answer-tab.component';
import { Stage2DashboardComponent } from './component/stage2-dashboard/stage2-dashboard.component';
import { Stage1DashboardComponent } from './component/stage1-dashboard/stage1-dashboard.component';
import { Stage3DashboardComponent } from './component/stage3-dashboard/stage3-dashboard.component';
import { Stage4DashboardComponent } from './component/stage4-dashboard/stage4-dashboard.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-user-form', component: AdminUserFormComponent },
  { path: 'tab', component: QuestionTabsComponent },
  { path: 'side-bar', component: SideBarComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'card', component: CardComponent },
  { path: 'trap1', component: Trap1Component },
  { path: 'trap2', component: Trap2Component },
  { path: 'comit', component: ComitComponent },
  { path: 'considerOptions', component: ConsiderOptionsComponent },
  { path: 'decisionToMove', component: DecisionToMoveComponent },
  { path: 'reasonToMove', component: ReasonToMoveComponent },
  { path: 'close', component: CloseComponent },
  { path: 'presentSolutions', component: PresentSolutionsComponent },
  { path: 'develop-needs', component: DevelopNeedsComponent },

  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'answer-tab', component: AnswerTabComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stage1-dashboard', component: Stage1DashboardComponent },
  { path: 'stage2-dashboard', component: Stage2DashboardComponent },
  { path: 'stage3-dashboard', component: Stage3DashboardComponent },
  { path: 'stage4-dashboard', component: Stage4DashboardComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
