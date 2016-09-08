/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestComponent } from './test.component';
import {provide} from '@angular/core';
import {ApiService} from '../../common/services/api.service';
import {Observable} from 'rxjs';
import {TestComponentBuilder} from '@angular/core/testing/test_component_builder';

let data = require('../../../data/albums.json');

class MockApiService {
  albums = Observable.of(data.albums);
  getAllAlbums() {
    console.log('called');
  }
}

describe('Component: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provide(ApiService, {useClass: MockApiService})],
    });
  });

  it('should create the component', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((componentFixture) => {
      expect(componentFixture.componentInstance).toBeTruthy();
      // componentFixture.detectChanges();
      // expect(element.querySelectorAll('span').length).toBe(1);
    });
  }));

  it('should be able to get albums', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((componentFixture) => {
      const component = componentFixture.componentInstance;
      component.ngOnInit();
      expect(component.albums).toEqual(data.albums);
    });
  }));

  it('should render the albums', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((componentFixture) => {
      const element = componentFixture.nativeElement;
      componentFixture.componentInstance.ngOnInit();
      componentFixture.detectChanges();
      expect(element.querySelectorAll('li').length).toEqual(data.albums.length);
    });
  }));



});
