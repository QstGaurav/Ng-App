import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.sendMessageEvent.emit(this.loginUser);
  }

  loginUser: string = 'User1';

  //child to parent: sending data from here
  @Output() sendMessageEvent = new EventEmitter<string>();

  // sendData(){
  //   this.sendMessageEvent.emit(this.loginUser);
  // }
}
