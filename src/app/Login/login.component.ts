import { Component, Injectable, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/AuthService.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  AuthCheck = inject(AuthService);
  router = inject (Router);
constructor() {
  this.AuthCheck.IsAuthenticated.next(false) ;

}
ngOnInit(): void {
}

onGuestLogin() {
  this.AuthCheck.IsAuthenticated.next(true) ;
this.router.navigateByUrl("/home");
}

}
