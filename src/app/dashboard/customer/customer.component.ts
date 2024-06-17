import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscribeService } from '../../../Services/Subscribe.service';
import { UserModal } from '../../Modal/User';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,RouterModule,AboutComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  providers: [SubscribeService, UserModal],
})
export class CustomerComponent implements OnInit{
    
  // constructor(private subscribeService:SubscribeService){
  // }
  searchData!:string;
  subscribeService = inject(SubscribeService);
  User = inject(UserModal);
  userDetails = this.User.data.users;
  filteredUser:any = this.userDetails;

  @Input() customerShowUser = '';
  // @ViewChild ('inputMail') inputMailEl !:ElementRef;
  valuePass: string = 'customerValue';
  displayMail: string = '';
  inputMail: string = '';

  //getting by (input) event and reference variable
  addUserMail(mail: string) {
    this.inputMail = mail;
    console.log(this.inputMail);
  }
  
  displaySignupMail() {
    this.displayMail = this.inputMail;

    this.onSubscribe('customerComp', this.displayMail);
  }

  //service call
  onSubscribe(comp: string, mail: string) {
    this.subscribeService.onSubscribeClick(comp, mail);
  }

  activeRoute=inject(ActivatedRoute);
  router = inject (Router);
  ngOnInit(): void {    
    // Calling the link by Fragment
    // this.activeRoute.fragment.subscribe((data)=>{
    //   console.log(data);
    //   this.router.navigateByUrl('');
    // });
    

  }
  getSearchData(){
    //Getting value from Query Param
    // this.activeRoute.queryParamMap.subscribe((data)=>{
    //   this.searchData = data.get('search');
    // })
      this.filteredUser = this.userDetails.filter(user =>
        user.name.toLowerCase().includes(this.searchData.toLowerCase())
      );
  }


}
