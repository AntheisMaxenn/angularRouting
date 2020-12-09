import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../services/auth/simple-auth.service';


@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})



export class GuardsComponent implements OnInit {


  constructor(private simpleAuthService: SimpleAuthService) { }

  authState: boolean;

  ngOnInit(): void {
    this.authState = this.simpleAuthService.authState;
  }

  login(){
    this.simpleAuthService.login();
    this.authState = this.simpleAuthService.authState;
  }

}
