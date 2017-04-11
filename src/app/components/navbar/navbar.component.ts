import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import{ FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public af: AngularFire, public router: Router, public fm:FlashMessagesService) { }

  ngOnInit() {

  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
    this.fm.show("You successfully logged out!", {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['/']);
  }
}
