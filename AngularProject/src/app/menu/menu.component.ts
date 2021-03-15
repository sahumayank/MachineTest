import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private routing: Router, private location: Location) {
  }
  ngOnInit() {
    this.isLogin()
    this.isLogout()
  }


  isLogin() {
    let check = localStorage.getItem('loginId');
    if (check != "null" && check != null) {
      return true;
    } else {
      return false;
    }
  }

  isLogout() {
    let loginId = localStorage.getItem('loginId');
    if ((loginId == "null" || loginId === null)
      && (this.location.path() != "/login"
        && this.location.path() != "/sessionOut"
        && this.location.path() != "/logout" && this.location.path() != ""
      )) {
      this.routing.navigateByUrl("/sessionOut");
      return true;
    } else {
      return false;

    }
  }
}
