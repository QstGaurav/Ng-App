import { AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { LoginComponent } from './Login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDataService } from '../Services/UserData.service';


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DashboardComponent,NavbarComponent,SidebarComponent,CustomerComponent,LoginComponent,HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[UserDataService]
})
export class AppComponent implements OnInit {

  UserData = inject ( UserDataService);
  
  ActiveUser:string="";
  title = 'my-app';
  receiveActiveUser(event:string){
    this.ActiveUser = event;
  }

  ngOnInit(): void {
    console.log(this.ActiveUser);
  }
}
