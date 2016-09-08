import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../common/services/api.service'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  subscription:Subscription;
  albums:Array<any>;

  constructor(private _apiService: ApiService) {

  }

  ngOnInit() {
    this.subscription = this._apiService.albums.subscribe(
      albums => {
        console.log(albums);
        this.albums = albums;
      });
    this._apiService.getAllAlbums();
  }

}
