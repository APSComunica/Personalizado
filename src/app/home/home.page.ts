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

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://github.com/APSComunica/Personalizado/blob/master/src/assets/data/MOCK_DATA.json').pipe(map(res => res['results']));
  }

  
}