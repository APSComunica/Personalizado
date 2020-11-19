import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string='';

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://raw.githubusercontent.com/APSComunica/Personalizado/master/src/assets/data/MOCK_DATA.json');
  }

  
}