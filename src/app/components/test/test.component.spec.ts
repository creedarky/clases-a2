/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestComponent } from './test.component';
import {provide} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../common/services/api.service';
import {TestDirective} from '../../common/directives/test.directive';

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
      declarations: [TestComponent, TestDirective]
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

  it('should test the directive', () => {
    const element = componentFixture.nativeElement;
    const el = element.querySelector('div[appTestDirective]');
    expect(el.style.backgroundColor).toBe('yellow');
    el.click();
    expect(el.style.backgroundColor).toBe('blue');
  });



});
