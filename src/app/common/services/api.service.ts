import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class ApiService {
  private _albums = new BehaviorSubject<Array<any>>([]);
  private _albumData = new BehaviorSubject<Array<any>>([]);
  albums = this._albums.asObservable();
  albumData = this._albumData.asObservable();

  constructor(private http: Http) { }


  getAllAlbums() {
    return this.http
      .get('/data/albums.json')
      .map(res => res.json().albums)
      .subscribe(data => this._albums.next(data));
  }

  getAlbum(id) {
    return Observable.forkJoin(
      this.http.get(`/data/album.json`).map(res => res.json().album),
      this.http.get(`/data/tracks.json`).map(res => res.json().tracks)
    ).subscribe(data => this._albumData.next(data));
  }

}
