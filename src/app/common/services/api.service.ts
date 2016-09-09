import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class ApiService {
  private _albums = new BehaviorSubject<Array<any>>([]);
  albums = this._albums.asObservable();

  constructor(private http: Http) { }


  getAllAlbums() {
    return this.http
      .get('/data/albums.json')
      .map(res => res.json().albums)
      .subscribe(data => this._albums.next(data));
  }

}
