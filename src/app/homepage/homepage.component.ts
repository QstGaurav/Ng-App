import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomerComponent } from '../dashboard/customer/customer.component';
import { LoginComponent } from '../Login/login.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DashboardComponent,NavbarComponent,SidebarComponent,CustomerComponent,LoginComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  ActiveUser:string="";
  title = 'my-app';
  receiveActiveUser(event:string){
    this.ActiveUser = event;
    console.log(this.ActiveUser);
  }
  ngOnInit(): void {
    
  }
}
