import { AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { LoginComponent } from './Login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent,NavbarComponent,SidebarComponent,CustomerComponent,LoginComponent,HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ActiveUser:string="";
  title = 'my-app';
  receiveActiveUser(event:string){
    this.ActiveUser = event;
  }
  ngOnInit(): void {
    console.log(this.ActiveUser);
  }
  
}
