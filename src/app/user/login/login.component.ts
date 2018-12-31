import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../services/entities/user';
import { UserService } from '../services/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  userService: UserService;
  private subcriptions = new Subscription();
  
  constructor(userService: UserService) {
  this.userService = userService;
  }


  ngOnInit() {
    this.subcriptions.add(this.userService.user.subscribe(user => this.user = user));
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

}
