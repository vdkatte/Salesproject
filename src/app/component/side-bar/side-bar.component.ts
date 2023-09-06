import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  role: any;
  role1: any;
  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.role1 = localStorage.getItem('role1');
  }
}
