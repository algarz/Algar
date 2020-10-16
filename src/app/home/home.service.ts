import { Injectable } from '@angular/core';
import { Home } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homes: Home[] = [
    {
    id: 'r1',
    title: 'RAM',
    imageUrl: 'https://media.pricebook.co.id/images/product/M/35854_M_1.webp',
    description: 'RAM yang cocok untuk kebutuhan bekerja sehari-hari.',
    merk: 'Kingston',
    model: 'Kingston 4GB DDR3 PC12800',
    baseClock: '',
    boostClock: '',
    core: '',
    weight: '1 Kg',
    speed: '1600 MHz',
    chipset: '',
    price: 'Rp 85,000.00',
    stock: '5',
    },
    {
      id: 'r2',
      title: 'VGA',
      imageUrl: 'https://images.evga.com/products/gallery/png/04G-P4-1357-KR_LG_1.png',
      description:'VGA yang rilis pada tahun 2018 ini sangat cocok untuk menambah kualitas gambar untuk permainan online Anda.',
      merk: 'EVGA',
      model: 'PCle 3.0',
      baseClock: '1200 MHz',
      boostClock: '1755 MHz',
      core: '1280',
      weight: '2 Kg',
      speed: 'GDDR6',
      chipset: '',
      price: 'Rp 2,875,000.00',
      stock: '5',
    },
    {
    id: 'r3',
    title: 'Motherboard',
    imageUrl: 'https://cf.shopee.co.id/file/234225baf6e0c026acce47a606ea7250',
    description: 'Motherboard untuk gaming.',
    merk: 'Gigabyte',
    model: 'B450M Gaming',
    baseClock: '',
    boostClock: '',
    core: '',
    weight: '1.5Kg',
    speed: '',
    chipset: 'AMD B450, Realtek ALC887 codec',
    price: 'Rp 1,250,000.00',
    stock: '2',
    },

    {
    id: 'r4',
    title: 'CPU',
    imageUrl: 'https://cf.shopee.co.id/file/0b68418c9b23538b3b0344624627b7cc',
    description: '',
    merk: 'Intel',
    model: 'Core i9-10850K',
    baseClock: '3.6',
    boostClock: '5.2',
    core: '10',
    weight: '',
    speed: '',
    chipset: '',
    price: 'Rp 7,800,000.00',
    stock: '4',
    }

    
  ];
  constructor(){ }

  getAllHomes(){
    return[...this.homes];
  }

  getHome(homeId: string){
    return {...this.homes.find( home => {
      return home.id === homeId;
    })}
  }

  deleteHome(homeId: string) {
    this.homes = this.homes.filter(home => {
      return home.id !== homeId;
    });
  }

}
