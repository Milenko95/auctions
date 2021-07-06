import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  user = {
    password: '',
    meta: 'string'
  }

  constructor(private service: AuctionService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userid') && localStorage.getItem('authtoken')) {
      this.router.navigate(['auctions']);
    }
  }


  login():void {
    localStorage.clear();
    this.service.getAuthentication(this.email, this.user).subscribe(response => {
     if (response) {
      localStorage.setItem('userid', response.userId);
      localStorage.setItem('authtoken', response.token);
      this.router.navigate(['auctions']);
     }
    }, err => {
      alert('Wrong username or password')
    })
  }

}
