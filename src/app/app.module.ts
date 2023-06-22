import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminUserFormComponent } from './component/admin-user-form/admin-user-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { QuestionTabsComponent } from './component/question-tabs/question-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from './component/card/card.component';

import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { DevelopNeedsComponent } from './component/develop-needs/develop-needs.component';
import { PresentSolutionsComponent } from './component/present-solutions/present-solutions.component';
import { CloseComponent } from './component/close/close.component';
import { ReasonToMoveComponent } from './component/reason-to-move/reason-to-move.component';
import { DecisionToMoveComponent } from './component/decision-to-move/decision-to-move.component';
import { ConsiderOptionsComponent } from './component/consider-options/consider-options.component';
import { ComitComponent } from './component/comit/comit.component';
import { Trap1Component } from './component/trap1/trap1.component';
import { Trap2Component } from './component/trap2/trap2.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AnswerTabComponent } from './component/answer-tab/answer-tab.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUserFormComponent,
    LoginpageComponent,
    AdminDashboardComponent,
    QuestionTabsComponent,
    CardComponent,

    SideBarComponent,
    HeaderComponent,
    DevelopNeedsComponent,
    PresentSolutionsComponent,
    CloseComponent,
    ReasonToMoveComponent,
    DecisionToMoveComponent,
    ConsiderOptionsComponent,
    ComitComponent,
    Trap1Component,
    Trap2Component,
    UserDashboardComponent,
    SignUpComponent,
    AnswerTabComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
