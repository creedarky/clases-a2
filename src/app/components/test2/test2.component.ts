import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ApiService} from '../../common/services/api.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy {
  subscription: Subscription;
  albums: Array<any>;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this._apiService.albums.subscribe(
      albums => {
        console.log(albums);
        this.albums = albums;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
