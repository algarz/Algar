import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Home } from '../home/home';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  homes: Home[];
  

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private homeService: HomeService) { }

  ngOnInit() {
    this.homes = this.homeService.getAllHomes();
  }

  deletesHome(homeId: string) {
    this.homeService.deleteHome(homeId);
    this.router.navigate(['/admin']);
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    this.homes = this.homeService.getAllHomes();
  }

  async presentAlert(homeId: string){
    const alert = await this.alertCtrl.create({
      header: 'Yakin?',
      message: 'Data yang sudah terhapus tidak dapat dikembalikan, bagaikan gelas kaca yang sudah pernah pecah lalu disusun agar kembali seperti semula.',
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel'
        },
        {
          text: 'DELETE',
          handler: () => this.deletesHome(homeId)
          
        }
      ]
    });
    await alert.present();
  }


}
