import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { AuctionService } from 'src/app/services/auction.service';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  cars: Car[] = [];
  user: string;
  remainingTimeFormat: any;
  auctionsSubscription: Subscription;
  source = interval(20000);
  constructor(private service: AuctionService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getAuctions();
    this.user = localStorage.getItem('userid');
    this.auctionsSubscription = this.source.subscribe(data => {
      if (this.cars.length === 0) {
        this.getAuctions();
      } else {
        this.cars = [];
        this.getAuctions();
      }
    })
  }

  getAuctions(): void {
    this.service.getAuctions().subscribe(response => {
      for (let car of response.items) {
        console.log(car);
        let tempCar = new Car(car);
        console.log(tempCar.amIHighestBidder)
        this.cars.push(tempCar);
      }
      this.calculateTime();
    }, err => {
      localStorage.clear();
      alert('Your are not logged in');
      this.router.navigate(['login']);
    })
  }
  
  
  calculateTime(): void {
    for (let car of this.cars) {
      let totalSeconds = car.remainingTime;
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      car.remainingTime = `${hours}:${minutes}:${seconds}`
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    if (this.auctionsSubscription) {
      this.auctionsSubscription.unsubscribe();
    }
  }


}
