import { Component, OnInit } from '@angular/core';
import { Home } from './home';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homes: Home[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homes = this.homeService.getAllHomes();
  }


}

