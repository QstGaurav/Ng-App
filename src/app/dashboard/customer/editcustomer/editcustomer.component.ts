import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.scss'
})
export class EditcustomerComponent implements OnInit{
  activeRoute = inject(ActivatedRoute);
  Id!:number ; 
  ngOnInit(): void {
    // const id= this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe((data)=>{
      this.Id = Number(data.get('id'));
      console.log(this.Id);
    })
  }

}
