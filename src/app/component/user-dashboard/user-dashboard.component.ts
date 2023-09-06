import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  role: any;
  role1: any;
  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.role1 = localStorage.getItem('role1');
  }

  reset() {
    this.adminService.resetAns().subscribe((res) => {
      console.log(res);
    });
    this.router.navigateByUrl('card');
  }
}
