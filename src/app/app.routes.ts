import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditcustomerComponent } from './dashboard/customer/editcustomer/editcustomer.component';
import { TdForm1Component } from './dashboard/tdForm1/tdForm1.component';
import { Rform2Component } from './dashboard/rform2/rform2.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'home', children:[
        {path:'form1',component:TdForm1Component},
        {path:'form2',component:Rform2Component}
    ] },
    { path: 'home/customer', component: HomepageComponent },
    { path: 'home/customer/edit/:id', component: EditcustomerComponent },
    { path: 'home/customer/edit/:id', component: EditcustomerComponent },
    { path: '**', component: NotFoundComponent }

];
