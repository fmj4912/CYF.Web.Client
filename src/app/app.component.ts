import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user/services/services/user.service';
import { User } from './user/services/entities/user';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'CYF-Web-Client';
  user: User;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  private subcriptions = new Subscription();
  constructor(private userService: UserService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subcriptions.add(this.userService.user.subscribe(user => this.user = user));
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
