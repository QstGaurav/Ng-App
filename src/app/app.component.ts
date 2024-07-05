import { AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Injectable, OnChanges, OnInit, SimpleChanges, ViewChild, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { LoginComponent } from './Login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDataService } from '../Services/UserData.service';
import { AuthService } from '../Services/AuthService.service';

@Injectable()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, NavbarComponent, SidebarComponent, CustomerComponent, LoginComponent, HomepageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UserDataService, LoginComponent],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  IsAuthenticated!: boolean;
  AuthCheck = inject(AuthService);
  constructor() {    
       this.AuthCheck.IsAuthenticated.subscribe((val)=> this.IsAuthenticated = val);
       console.log(this.IsAuthenticated);
  }

  UserData = inject(UserDataService);
  ActiveUser: string = '';
  title = 'my-app';
  receiveActiveUser(event: string) {
    this.ActiveUser = event;
  }

  ngOnInit(): void {
    
    // console.log(this.ActiveUser);
  }
}
