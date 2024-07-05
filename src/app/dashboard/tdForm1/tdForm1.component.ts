import { Component, OnInit, inject, signal } from '@angular/core';
import { UserDataService } from '../../../Services/UserData.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tdForm1',
  templateUrl: './tdForm1.component.html',
  styleUrls: ['./tdForm1.component.css'],
  standalone:true,
  imports:[ FormsModule,CommonModule,]
})
export class TdForm1Component implements OnInit {
  
  constructor(private UserData : UserDataService) {
    console.log(this.warningDisplay());
  }
  _userDataService=inject(UserDataService);
  _router = inject(Router);
  userData: [] = [];
  toasterActive!:boolean;
  warningDisplay = signal();
  ngOnInit() {

  }
  randomNumber= 0;
  onSubjectButtonClick() {
    // this.UserData.getUserBySubject().subscribe({
    //   next: (val: any) => {
    //     this.userData = val;
    //     console.log(val);
    //   },
    //   error: (err:any) => {
    //     console.log(err);
    //   },
    // });
  }
  onClick2(){
    this.UserData.getUser().subscribe({
      next:(val:any)=>{
        this.userData = val;
      }
    });
  }
  onToasterClick(){
         
  }
}
