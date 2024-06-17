import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { SubscribeService } from '../../Services/Subscribe.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [SubscribeService],
})
export class DashboardComponent {
  constructor(private subService: SubscribeService) {}

  data: any[] = [];
  array1 = [2, 5, 8, 12, 3];

  mssg: string = '';

  //Binding msssg after View get initialize
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mssg = this.customerComp?.valuePass;
    }, 0);
    // this. mssg = this.customerComp?.valuePass;
  }

  //using child component property , variable
  @ViewChild(CustomerComponent, { static: false })
  customerComp!: CustomerComponent;

  //parent to child
  @Input() ShowUser: string = '';

  //service call
  onSubscribe() {
    this.subService.onSubscribeClick('dashboard component');
  }

  //observer
  // myObservable = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.complete();
  // });

//Using From align it one by one ; of load whole data
  myObservable = from (this.array1);
  
  // subscriber
  getAsyncDatastream() {
    this.myObservable.subscribe({
      next: (val) => {
        this.data.push(val);
      },
      error:(err)=> {
        alert(err.message);
      },
      complete:() =>{
        alert('Data stream completed');
      },
    });
  }

  removeData(){
    this.data = [];
  }

}
