import { Component, OnInit, inject } from '@angular/core';
import { UserDataService } from '../../../Services/UserData.service';

@Component({
  selector: 'app-tdForm1',
  templateUrl: './tdForm1.component.html',
  styleUrls: ['./tdForm1.component.css'],
  standalone:true
})
export class TdForm1Component implements OnInit {
  constructor(private UserData : UserDataService) {
    
  }
  userData: [] = [];
  ngOnInit() {}
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
}
