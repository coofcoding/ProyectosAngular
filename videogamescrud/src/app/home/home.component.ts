import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  user_info = {
    username: "",
    password: ""
  };

  ngOnInit() {
    this.user = null;

    this.user_info = {
      username: "",
      password: ""
    };

    alert("For can sign in you have to press the 'Sign In' button two times.");
  }

  constructor(private homeService: HomeService) { }

  getUserData() {
    return this.user;
  }

  userLogIn() {

    try {
      this.homeService.getUser(this.user_info.username).subscribe((result: any) => this.user = result);
      //console.log(this.user);
    } catch (error) {
      alert("Something went wrong, please check the form and try again!")
    }

    if (this.user_info.password === this.user.pass && this.user_info.password != "" && this.user.pass != undefined) {
      if (this.user["username"] === 'root') {
        window.location.href = "/lobby?Fec%20MBOjDU8hlaOeTzimVBRrgqnspVNiw34icjZT1wTfa99AjupBSDI%20IpsDwtVkjesatHR0ChIMDQq4mpdD/FEdMs44cuuPAPJ7INYKBatCyJ2idp7qczDr9E1w24B1/5lHzA7YdHvW%20/0zxxLJZXfzvcrQQUxJSekCeW4/sVUBILIevcIgQ4L64fe/eJVzAxSggQG8B/mqAAvtqVVFxQ%3D%3D=0Ji71BAn4yY7SHpSMb5N7GYR3oVnp4YFeD73QXr0F7z3US648CEf8Wdb8Sk9EyQ919XChhKW9FrTiY3Ael34QnWc%20uCsWzqJQaKZOdjZuFidRqLAcCRcPUH2%20NlErC9/PTFNPlxuIttrL2WXwC61PhgfSlCuIeFjv8eStpwytJXqssb%20JUjc02d3vWQRZ4a%20yzKh68jJM%207/dMWNj9xIeNHAWBKvIxvZKz3dnhUME7oJzmYHkQRhBu7h%209qfl2/d&games=true";
      } else {
        window.location.href = "/lobby?games=true";
      }
    }
  };
}
