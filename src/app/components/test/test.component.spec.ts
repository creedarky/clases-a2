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
    return;
  }
}

describe('Component: Test', () => {
  let componentFixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provide(ApiService, {useClass: MockApiService})],
      declarations: [TestComponent]
    });
    componentFixture = TestBed.createComponent(TestComponent);
  });

  it('should create the component', () => {
    expect(componentFixture.componentInstance).toBeTruthy();
  });

  it('should be able to get albums', () => {
    const component = componentFixture.componentInstance;
    component.ngOnInit();
    expect(component.albums).toEqual(data.albums);
  });

  it('should render the albums', () => {
    const element = componentFixture.nativeElement;
    componentFixture.componentInstance.ngOnInit();
    componentFixture.detectChanges();
    expect(element.querySelectorAll('li').length).toEqual(data.albums.length);
  });



});
