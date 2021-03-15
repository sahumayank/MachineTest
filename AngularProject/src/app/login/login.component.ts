import { Component, OnInit } from '@angular/core';
import { EndpointService } from "../endpoint.service"
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
  }
  constructor(private endpoint: EndpointService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("list")
    localStorage.removeItem('loginId');
    if (this.router.url == "/sessionOut") {
      this.form["error"] = true
      this.form["message"] = "Session time out"
    }
    if (this.router.url == "/logout") {
      this.form["error"] = true
      this.form["message"] = "Logout"
    }

  }

  signIn() {
    this.endpoint.userSearch().subscribe(res => {
      var data = res["result"]
      for (var i = 0; i < res["result"].length; i++) {
        if (this.form["login"] == data[i].login && this.form["password"] == data[i].password) {
          this.form["error"] = false
          localStorage.setItem("loginId", this.form["login"])
          this.router.navigateByUrl("/welcome")
        } else {
          this.form["error"] = true
          this.form["message"] = "Invalid Id and Password"
        }
      }
    });
  }

}