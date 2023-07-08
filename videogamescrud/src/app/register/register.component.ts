import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  account: any;

  nUser = {
    "nUsername": "",
    "nPassword": ""
  }

  constructor(private registerService: RegisterService) { }

  createAccount() {
    if (this.nUser.nUsername != "" && this.nUser.nPassword != "") {
      this.registerService.createUser(this.nUser).subscribe((user: any) => this.account = user);
      alert("The account has been created successfully.");
    } else {
      alert("Please complete the fields and try again.")
    }
  }
}
