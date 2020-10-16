import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Home } from '../home';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedHome : Home;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homesService: HomeService,
    
  ) { }

  ngOnInit() {
    //.....
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has( 'homeId')) {return;}
      const homeId = paramMap.get('homeId');
      this.loadedHome = this.homesService.getHome(homeId);
    });

    
  }

  
}
